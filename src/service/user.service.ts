import { HttpStatus, Injectable } from "@nestjs/common";
import { request } from "@octokit/request";
import { InternalServerError } from "../exception/internal-server-error.exception";
import { UserNotFound } from "../exception/user-not-found.exception";
import { StarredDto } from "../adapter/starred.dto";
import { UserDto } from "../adapter/user.dto";
import { StarredDtoMapper } from "../mapper/starred-dto.mapper";
import { UserDtoMapper } from "../mapper/user-dto.mapper";
import { UsersService } from "../local-data-base-users/local-db.service";
import { UnauthorizedRequest } from "../exception/unauthorized-request.exception";
@Injectable()
export class UserService {
    constructor(private userDtoMapper: UserDtoMapper, private starredDtoMapper: StarredDtoMapper,
        private dbLocalService: UsersService) { }
    async findByUserName(userName: string): Promise<[UserDto, Array<StarredDto>]> {
        let result: [UserDto, StarredDto[]] | any;
        try {
                result = await request({
                method: "GET",
                url: "/users/" + userName
            }).then(async result => {
                const userDto: UserDto = this.userDtoMapper.responseToDto(result);
                const starredDto: Array<StarredDto> = this.starredDtoMapper.responseToDto(await this.listStarreds(userName));
                this.dbLocalService.createUser([userDto, starredDto]);
                return [userDto, starredDto];

            }).catch(async error => {
                console.log('entrou no catch');
                if(error.status !== HttpStatus.NOT_FOUND){
                    return await this.dbLocalService.findUser(userName);
                }
            });
            return result;
        } catch (error) {
            if (error.status === HttpStatus.NOT_FOUND) {
                throw new UserNotFound('User not found!');
            }else if(error.status === HttpStatus.FORBIDDEN){
                throw new UnauthorizedRequest('Requisition limit exceeded');
            }else{
                throw new InternalServerError('Cannot establish connection with GitHub API.');
            } 
        }
    }
    private async listStarreds(userName: string): Promise<Array<StarredDto>> {
        return (await request('GET /users/' + userName + '/starred')).data;
    }
}