export class StarredDto{
    name: string;
    description: string;
    visibility: string;
    url: string;

    constructor(name: string, description: string, visibility: string, url: string){
        this.name = name; 
        this.description = description; 
        this.visibility = visibility;
        this.url = url;
    }
}