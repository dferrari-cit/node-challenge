import { Injectable } from "@nestjs/common";
import { StarredDto } from "../adapter/starred.dto";
import { UserDto } from "../adapter/user.dto";
import { StarredModel } from "../model/starred.model";
import { UserModel } from "../model/user.model";

@Injectable()
export class UserMapper{
    dtoToModel([userDto, starredDto]: [UserDto, StarredDto[]]): UserModel{
        return new UserModel(userDto.avatar_url, userDto.name, userDto.bio, userDto.url, 
            starredDto instanceof StarredDto ? this.dtoListToModelList(starredDto): []);
    }

    private dtoListToModelList(starredDto: Array<StarredDto>): Array<StarredModel>{
        let starredList: Array<StarredModel> = [];
        starredDto.forEach(starred => {
            starredList.push(new StarredModel(starred.name, starred.description, starred.visibility, starred.url));
        });

        return starredList;
    }
}