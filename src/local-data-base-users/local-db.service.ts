import { Injectable } from "@nestjs/common";
import { StarredDto } from "../adapter/starred.dto";
import { UserDto } from "../adapter/user.dto";
import { UserModel } from "../model/user.model";
import { UserSchemaMapper } from "./local-db.schema.mapper";
import { UsersRepository } from "./local-db.repository";
import { Users } from "./lodal-db.schema";

@Injectable()
export class UsersService{
    constructor(
        private readonly usersRepository: UsersRepository,
        private mapper: UserSchemaMapper){}

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

    async findAll(){
        return await this.usersRepository.findAll();
    }
}