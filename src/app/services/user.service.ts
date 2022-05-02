import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "../interfaces/user";
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class UserService {

    apiUrl: string;
    user: User = {'avatar': '../../../assets/imgs/no-image.webp', 'bio': '', 'name': '', 'starredList': [], 'urlUser': ''};

    constructor (private http: HttpClient){
        this.apiUrl= '/api/user/';
    }

    findUser(userName: string): Observable<User>{
        return this.http.get<User>(this.apiUrl + userName);
    }
    
    public treatResponse(userT: User): User{

        if(userT.avatar == null){
            userT.avatar = '../../../assets/imgs/no-image.webp'
          }
          if(userT.bio == null){
            userT.bio = '...'
          }
          if(userT.name == null){
            userT.name = '...'
          }
          if(userT.urlUser == null){
            userT.urlUser = '...'
          }else{
            userT.urlUser = "https://github.com/" + userT.urlUser.slice(29, )
          }
          if(userT.starredList.length > 0){
            userT.starredList.forEach(element => {
              let repository = element.urlRepository;
              element.urlRepository = "https://github.com/" + repository.slice(29, )
            })    
          }
      
          this.user = userT;

        return this.user;
    }
}