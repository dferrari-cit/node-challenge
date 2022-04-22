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

@Module({
    imports:[
        MongooseModule.forFeature([{ name: 'Registry', schema: RegistrySchema }])
    ],
    controllers: [UserController],
    providers: [UserMapper, UserDtoMapper, StarredDtoMapper, UserService, DBService, RegistryDtoMapper]
})
export class UserModule {}