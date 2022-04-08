import { Module } from "@nestjs/common";
import { UserController } from "src/controller/user.controller";
import { StarredDtoMapper } from "src/mapper/starred-dto.mapper";
import { UserDtoMapper } from "src/mapper/user-dto.mapper";
import { UserMapper } from "src/mapper/user.model.mapper";
import { UserService } from "src/service/user.service";
import { UserResponseValidator } from "src/validator/user-response.validator";

@Module({
    controllers: [UserController],
    providers: [UserMapper, UserDtoMapper, StarredDtoMapper, UserService, UserResponseValidator]
})
export class UserModule {}