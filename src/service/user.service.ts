import { Injectable } from "@nestjs/common";
import { request } from "@octokit/request";
import { StarredDto } from "src/adapter/starred.dto";
import { UserDto } from "src/adapter/user.dto";
import { UserNotFound } from "src/errors/user-not-found.error";
import { StarredDtoMapper } from "src/mapper/starred-dto.mapper";
import { UserDtoMapper } from "src/mapper/user-dto.mapper";
@Injectable()
export class UserService{
    constructor(private userDtoMapper: UserDtoMapper, private starredDtoMapper: StarredDtoMapper){}
    async findByUserName(userName: string): Promise<[UserDto, Array<StarredDto>] | UserNotFound>{
        try {
            const response = await request({
                method : "GET" , 
                url : "/users/" + userName
            });
            const userDto: UserDto = this.userDtoMapper.responseToDto(response);
            const starredDto: Array<StarredDto> = this.starredDtoMapper.responseToDto(await this.listStarreds(userName));
            return [userDto, starredDto];
        } catch (error) {
            if(error.status === 404){
                return new UserNotFound('Usuário não encontrado', error.status);
            }
        }
    }
    private async listStarreds(userName: string): Promise<Array<StarredDto>>{
        return (await request('GET /users/' + userName + '/starred')).data;
    }
}