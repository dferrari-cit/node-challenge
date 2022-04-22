import { Injectable } from "@nestjs/common";
import { RegistryDto } from "../adapter/registry.dto";

@Injectable()
export class RegistryDtoMapper{

    responseToDto(response: any){
        let listRegistryDto: Array<RegistryDto> = [];
        response.forEach(element => {
            const {
                searchedName,
                searchedDate
            } = element;
            listRegistryDto.push(new RegistryDto(searchedName, searchedDate))
        })
    return listRegistryDto;
    }
}