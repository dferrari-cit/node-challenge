import { Injectable } from "@nestjs/common";
import { UserDto } from "../adapter/user.dto";

@Injectable()
export class UserDtoMapper{
    responseToDto(response: any){
        const {
            avatar_url,
            url,
            starred_url,
            name,
            bio
        } = response.data;
        return new UserDto(avatar_url, url, starred_url, name, bio);
    }
}