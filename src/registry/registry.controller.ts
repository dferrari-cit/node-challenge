import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { get } from "http";
import { DBService } from "src/service/db.service";
import { Registry } from "./registry";



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

        //  @Get(':userName')
        //  async getByName(@Param('userName') userName: string): Promise<any> {
        //      console.log('caiu aqui')
        //      return this.registryService.getByName(userName);
        //  }

    @Get(':date')
    async getBydate(@Param('date') date: Date): Promise<any> {
        console.log(date)
        return this.registryService.getByDate(date);
    }

    @Post()
    //@ApiResponse({ status: 200, description: 'Successful!', type:  Registry})
    async create(@Body() registry: Registry): Promise<Registry>  {
        const dataAtual = new Date();
        registry.data=dataAtual;
        //registry.data=dataAtual.toString().slice(0,21);
        return this.registryService.create(registry);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        this.registryService.delete(id);
    }

}