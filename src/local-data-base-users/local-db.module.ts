import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersRepository } from "./users.repository";
import { Users, UserSchema } from "./users.schema";
import { UsersService } from "./users.service";

@Module({
    imports:[
        MongooseModule.forFeature([{name: Users.name, schema: UserSchema}], 'registryUsers')],
    providers: [UsersService, UsersRepository]
})
export class LocalDataBaseModule{};