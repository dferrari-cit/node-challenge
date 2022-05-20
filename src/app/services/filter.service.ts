import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Filter } from "../interfaces/filter";



@Injectable({ providedIn: 'root' })
export class FilterService { 

    apiUrl: string = '';
    constructor (private http: HttpClient){
        this.apiUrl = '/api/'
    }

    findRecords(resquest: string) {
        //console.log('Request: ' + this.apiUrl + resquest)
        return this.http.get<Filter[]>(this.apiUrl + resquest);
    }
}