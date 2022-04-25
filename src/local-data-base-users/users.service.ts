import { Injectable } from "@nestjs/common";
import { StarredDto } from "../adapter/starred.dto";
import { UserDto } from "../adapter/user.dto";
import { UserModel } from "../model/user.model";
import { UserSchemaMapper } from "./user.schema.mapper";
import { UsersRepository } from "./users.repository";
import { Users } from "./users.schema";

@Injectable()
export class UsersService{
    private mapper = new UserSchemaMapper();
    constructor(private readonly usersRepository: UsersRepository){}

    async createUser(user: UserModel | [UserDto, StarredDto[]]): Promise<Users>{
        let newUser;
        if(user instanceof UserModel){
            newUser = this.mapper.modelToSchema(user);
        }else{
            const result = this.mapper.dtoToSchema(user);
            newUser = this.mapper.modelToSchema(result);
        }
        return this.usersRepository.create(newUser);
    }

    async findUser(name: string): Promise<[UserDto, StarredDto[]]>{
        let result = await this.usersRepository.findOne({urlUser: {$regex: name}});
        return this.mapper.schemaToDto(result);
    }
}