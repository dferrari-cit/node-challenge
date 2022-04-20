import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Registry } from "../model/registry.model";
import { DBService } from "../service/db.service";

@Controller('search')
@ApiTags('Search-Registry')
export class RegistryController {

    constructor(
        private registryService: DBService
    ) { }

    @Get()
    async getAll(): Promise<Registry[]> {
        return this.registryService.getAll();
    }

    @Get('name/:searchedName')
    async getByName(@Param('searchedName') userName: string): Promise<any> {
        return this.registryService.getByName(userName);
    }

    @Get('data/:searchedData')
    async getBydate(@Param('searchedData') searchedData: string): Promise<any> {
        return this.registryService.getByDate(searchedData);
    }

}