import { Module } from "@nestjs/common";
import { UserController } from "../controller/user.controller";
import { StarredDtoMapper } from "../mapper/starred-dto.mapper";
import { UserDtoMapper } from "../mapper/user-dto.mapper";
import { UserMapper } from "../mapper/user.model.mapper";
import { UserService } from "../service/user.service";

@Module({
    controllers: [UserController],
    providers: [UserMapper, UserDtoMapper, StarredDtoMapper, UserService]
})
export class UserModule {}