import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RegistryDtoMapper } from "../mapper/registry.dto.mapper";
import { RegistrySchema } from "../model/registry.model";
import { RemoteDBService } from "../service/remote.db.service";
import { RegistryController } from "./registry.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Registry', schema: RegistrySchema }])
    ],
    controllers: [RegistryController],
    providers: [RemoteDBService, RegistryDtoMapper]
})
export class RegistryModule { }