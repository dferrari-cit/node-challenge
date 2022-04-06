import { Module } from "@nestjs/common";
import { UserController } from "src/controller/user.controller";

@Module({
    controllers: [UserController]
})
export class UserModule {}