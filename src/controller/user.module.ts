import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RegistrySchema } from "../model/registry.model";
import { DBService } from "../service/db.service";
import { UserController } from "../controller/user.controller";
import { StarredDtoMapper } from "../mapper/starred-dto.mapper";
import { UserDtoMapper } from "../mapper/user-dto.mapper";
import { UserMapper } from "../mapper/user.model.mapper";
import { UserService } from "../service/user.service";
import { RegistryDtoMapper } from "../mapper/registry.dto.mapper";
import { Users, UserSchema } from "src/local-data-base-users/users.schema";
import { UsersService } from "src/local-data-base-users/users.service";
import { UsersRepository } from "src/local-data-base-users/users.repository";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Registry', schema: RegistrySchema }]),
        MongooseModule.forFeature([{name: Users.name, schema: UserSchema}], 'registryUsers')
    ],
    controllers: [UserController],
    providers: [UserMapper, UserDtoMapper, StarredDtoMapper, UserService, DBService, RegistryDtoMapper,UsersService, UsersRepository]
})
export class UserModule { }