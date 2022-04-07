import { Injectable } from "@nestjs/common";
import { StarredDto } from "src/adapter/starred.dto";
import { UserDto } from "src/adapter/user.dto";
import { StarredModel } from "src/model/starred.model";
import { UserModel } from "src/model/user.model";

@Injectable()
export class UserMapper{
    dtoToModel([userDto, starredDto]: [UserDto, StarredDto[]]): UserModel{
        return new UserModel(userDto.avatar_url, userDto.name, userDto.bio, userDto.url, this.dtoListToModelList(starredDto));
    }

    private dtoListToModelList(starredDto: Array<StarredDto>): Array<StarredModel>{
        let starredList: Array<StarredModel> = [];
        starredDto.forEach(starred => {
            starredList.push(new StarredModel(starred.name, starred.description, starred.visibility, starred.url));
        });

        return starredList;
    }
}