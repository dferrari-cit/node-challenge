import { Injectable } from "@nestjs/common";
import { StarredDto } from "../adapter/starred.dto";

@Injectable()
export class StarredDtoMapper{
    responseToDto(response: any){
        let starredListDto: Array<StarredDto> = [];
        response.forEach(element => {
            const {
                name,
                description,
                visibility,
                url,
            } = element;
            starredListDto.push(new StarredDto(name, description, visibility, url));
        })
        return this.maxList(starredListDto);
    }
    private maxList(starredDtoList: Array<StarredDto>){
        let limiter = starredDtoList.length < 5 && starredDtoList.length > 0 ? starredDtoList.length : 5;
        let starredlistLimiter: Array<StarredDto> = [];
        for(let cont = 0; cont < limiter && starredDtoList.length > 0; cont++){
            starredlistLimiter.push(starredDtoList[cont]);
        }
        return starredlistLimiter;
    }
}