import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "../interfaces/user";


@Injectable({ providedIn: 'root' })
export class UserService {

    apiUrl: string;

    constructor (private http: HttpClient){
        this.apiUrl= '/api/user/';
    }


    verify(userName: string){
        return this.http.get<User>(this.apiUrl + userName);
    }
    
}