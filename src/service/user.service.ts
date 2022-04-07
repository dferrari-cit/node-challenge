import { Injectable } from "@nestjs/common";
import { request } from "@octokit/request";
import { StarredDto } from "src/adapter/starred.dto";
import { UserDto } from "src/adapter/user.dto";
import { StarredDtoMapper } from "src/mapper/starred-dto.mapper";
import { UserDtoMapper } from "src/mapper/user-dto.mapper";
@Injectable()
export class UserService{
    constructor(private userDtoMapper: UserDtoMapper, private starredDtoMapper: StarredDtoMapper){}

    async findByUserName(userName: string): Promise<[UserDto, StarredDto[]]>{
                const userDto: UserDto = this.userDtoMapper.responseToDto(await request('GET /users/' + userName));
                const starredDto: Array<StarredDto> = this.starredDtoMapper.responseToDto(await this.listStarreds(userName));
                return [userDto, starredDto];
    }
    private async listStarreds(userName: string): Promise<Array<StarredDto>>{
        return (await request('GET /users/' + userName + '/starred')).data;
    }
}