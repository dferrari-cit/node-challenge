import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Registry } from "../model/registry.model";
import { DBService } from "../service/db.service";

@Controller('search')
@ApiTags('Search-Registry')
export class RegistryController {

    constructor(
        private registryService: DBService
    ) { }


    @Get()
    @ApiOperation({ description: 'Show all search registries.' })
    @ApiResponse({ status: 200, description: 'Successful!', type: Registry, isArray: true })
    async getAll(): Promise<Registry[]> {
        return this.registryService.getAll();
    }

    @Get('name/:searchedName')
    @ApiOperation({ summary: 'GitHub User Name.', description: 'Search registries by user name.'})
    @ApiResponse({ status: 200, description: 'Successful!', type: Registry, isArray: true })
    async getByName(@Param('searchedName') userName: string): Promise<Registry[]> {
        return this.registryService.getByName(userName);
    }

    @Get('data/:searchedDate')
    @ApiOperation({ summary: 'Date of search.', description: 'Search registries by date.' })
    @ApiResponse({ status: 200, description: 'Successful!', type: Registry, isArray: true })
    async getBydate(@Param('searchedDate') searchedData: string): Promise<Registry[]> {
        return this.registryService.getByDate(searchedData);
    }

}