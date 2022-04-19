import { HttpStatus, Injectable } from "@nestjs/common";
import { request } from "@octokit/request";
import { InternalServerError } from "../exception/internal-server-error.exception";
import { UserNotFound } from "../exception/user-not-found.exception";
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
            if (error.status === HttpStatus.NOT_FOUND) {
                throw new UserNotFound('User not found!');
            }else{
                throw new InternalServerError('Cannot establish connection with GitHub API.');
            } 
        }
    }
    private async listStarreds(userName: string): Promise<Array<StarredDto>> {
        return (await request('GET /users/' + userName + '/starred')).data;
    }
}