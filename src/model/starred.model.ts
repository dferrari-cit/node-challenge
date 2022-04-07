export class StarredModel {
    name: string
    description: string
    flagType: string
    urlRepository: string

    constructor(name: string, description: string, flagType: string, urlRepository: string){
        this.name = name;
        this.description= description;
        this.flagType= flagType;
        this.urlRepository= urlRepository;
    }

}