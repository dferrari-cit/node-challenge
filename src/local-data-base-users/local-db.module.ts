import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersRepository } from "./local-db.repository";
import { Users, UserSchema } from "./lodal-db.schema";
import { UsersService } from "./local-db.service";
import { UserSchemaMapper } from "./local-db.schema.mapper";

@Module({
    imports:[
        MongooseModule.forFeature([{name: Users.name, schema: UserSchema}], 'registryUsers')],
    providers: [UsersService, UsersRepository, UserSchemaMapper]
})
export class LocalDataBaseModule{};