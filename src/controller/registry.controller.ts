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

    // @Get(':searchedName')
    // async getByName(@Param('searchedName') userName: string): Promise<any> {
    //     return this.registryService.getByName(userName);
    // }

    @Get(':searchedData')
    async getBydate(@Param('searchedData') searchedData: string): Promise<any> {
        return this.registryService.getByDate(searchedData);
    }

    @Post()
    //@ApiResponse({ status: 200, description: 'Successful!', type:  Registry})
    async create(@Body() registry: Registry): Promise<Registry>  {
        const dataAtual = new Date();
        registry.searchedData=dataAtual.toString().slice(0, 21).replace(/ /g, '-');
        return this.registryService.create(registry);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        this.registryService.delete(id);
    }

}