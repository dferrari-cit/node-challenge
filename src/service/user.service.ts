import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { request } from "@octokit/request";
import { StarredDto } from "../adapter/starred.dto";
import { UserDto } from "../adapter/user.dto";
import { StarredDtoMapper } from "../mapper/starred-dto.mapper";
import { UserDtoMapper } from "../mapper/user-dto.mapper";
@Injectable()
export class UserService {
    constructor(private userDtoMapper: UserDtoMapper, private starredDtoMapper: StarredDtoMapper) { }
    async findByUserName(userName: string): Promise<[UserDto, Array<StarredDto>]> {
        try {
            const response = await request({
                method: "GET",
                url: "/users/" + userName
            });
            const userDto: UserDto = this.userDtoMapper.responseToDto(response);
            const starredDto: Array<StarredDto> = this.starredDtoMapper.responseToDto(await this.listStarreds(userName));
            return [userDto, starredDto];
        } catch (error) {
            if (error.status === 404) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'User not found!',
                }, HttpStatus.NOT_FOUND);
            } else if (error.status === 500) {
                throw new HttpException({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'Cannot establish connection with GitHub.',
                }, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    private async listStarreds(userName: string): Promise<Array<StarredDto>> {
        return (await request('GET /users/' + userName + '/starred')).data;
    }
}