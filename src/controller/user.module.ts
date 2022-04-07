import { Module } from "@nestjs/common";
import { UserController } from "src/controller/user.controller";
import { StarredDtoMapper } from "src/mapper/starred-dto.mapper";
import { UserDtoMapper } from "src/mapper/user-dto.mapper";
import { UserMapper } from "src/mapper/user.model.mapper";
import { UserService } from "src/service/user.service";

@Module({
    controllers: [UserController],
    providers: [UserMapper, UserDtoMapper, StarredDtoMapper, UserService]
})
export class UserModule {}