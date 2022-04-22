export class RegistryDto {
    searchedName: string;
    searchedDate: string;

    constructor(searchedName: string, searchedDate: string) {
        this.searchedName=searchedName;
        this.searchedDate=searchedDate;
    }
}