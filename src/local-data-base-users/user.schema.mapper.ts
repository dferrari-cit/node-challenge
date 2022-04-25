import { StarredDto } from "../adapter/starred.dto";
import { UserDto } from "../adapter/user.dto";
import { StarredDtoMapper } from "../mapper/starred-dto.mapper";
import { UserDtoMapper } from "../mapper/user-dto.mapper";
import { UserMapper } from "../mapper/user.model.mapper";
import { UserModel } from "../model/user.model";
import { Users } from "./users.schema";

export class UserSchemaMapper{
    private starredMapper = new StarredDtoMapper();
    private userMapper = new UserDtoMapper();
    private modelMapper = new UserMapper();
    modelToSchema(user: UserModel): Users{
        const {
            avatar,
            name,
            bio,
            urlUser,
            starredList
        } = user;
        const array = [];
        const newUser = new Users();
        newUser.avatar = avatar;
        newUser.name = name;
        newUser.bio = bio;
        newUser.urlUser = urlUser;
        starredList.forEach(starred => {
            const {
                name,
                description,
                flagType,
                urlRepository,
            } = starred;
            array.push({
                name,
                description,
                flagType,
                urlRepository,
            } );
        });
        newUser.starredList = array;
        return newUser;
    }
    schemaToModel(user: Users): UserModel{
        const mapper = new UserMapper();
        const {
            avatar,
            name,
            bio,
            urlUser,
            starredList
        } = user;
        const array = [];
        if(starredList.length > 0){
            for(let x = 0; x < starredList.length; x++){
                const {
                    name,
                    description,
                    flagType,
                    urlRepository,
                } = starredList[x];
                array[x] = {
                    name,
                    description,
                    visibility: flagType,
                    url: urlRepository,
                };
            }
        }
        const newStarredsDto = array.length > 0 ? this.starredMapper.responseToDto(array): [];
        const newUserDto = this.userMapper.responseToDto({
            data:{
                    avatar_url : avatar, 
                    url: urlUser, 
                    starred_ulr: null, 
                    name: name,
                    bio: bio
                }
            }
        );
        const newUser = mapper.dtoToModel([newUserDto, newStarredsDto]);
        return newUser;
    }
    schemaToDto(user: Users): [UserDto, StarredDto[]]{
        const {
            avatar,
            name,
            bio,
            urlUser,
            starredList
        } = user;
        const array = [];
        if(starredList.length > 0){
            for(let x = 0; x < starredList.length; x++){
                const {
                    name,
                    description,
                    flagType,
                    urlRepository,
                } = starredList[x];
                array[x] = {
                    name,
                    description,
                    visibility: flagType,
                    url: urlRepository,
                };
            }
        }
        const newStarredsDto = array.length > 0 ? this.starredMapper.responseToDto(array): [];
        const newUserDto = this.userMapper.responseToDto({
            data:{
                    avatar_url : avatar, 
                    url: urlUser, 
                    starred_ulr: null, 
                    name: name,
                    bio: bio
                }
            }
        );
        return [newUserDto, newStarredsDto];
    }
    dtoToSchema(user: [UserDto, StarredDto[]]): Users{
        const result = this.modelMapper.dtoToModel(user);
        return this.modelToSchema(result);
    }
        
}