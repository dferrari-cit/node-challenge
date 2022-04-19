import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { DBService } from "../service/db.service";
import { RegistrySchema } from "../registry/schemas/registry.schema";
import { RegistryController } from "./registry.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Registry', schema: RegistrySchema }])
    ],
    controllers: [RegistryController],
    providers: [DBService]
})
export class RegistryModule { }