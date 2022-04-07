import { ApiProperty } from "@nestjs/swagger";

export class StarredModel {
    @ApiProperty({
        description: 'Repository name',
        example: 'Potato'
    })
    name: string

    @ApiProperty({
        description: 'Repository desciption',
        example: 'Representation of potato'
    })
    description: string

    @ApiProperty({
        description: 'Indicates whether the repository is public or private',
        example: 'public'
    })
    flagType: string

    @ApiProperty({
        description: 'URL for repositore',
        example: 'https://api.github.com/repos/p/potato'
    })
    urlRepository: string

    constructor(name: string, description: string, flagType: string, urlRepository: string){
        this.name = name;
        this.description= description;
        this.flagType= flagType;
        this.urlRepository= urlRepository;
    }

}