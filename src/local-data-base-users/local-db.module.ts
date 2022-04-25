import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersRepository } from "./local-db.repository";
import { Users, UserSchema } from "./lodal-db.schema";
import { UsersService } from "./local-db.service";

@Module({
    imports:[
        MongooseModule.forFeature([{name: Users.name, schema: UserSchema}], 'registryUsers')],
    providers: [UsersService, UsersRepository]
})
export class LocalDataBaseModule{};