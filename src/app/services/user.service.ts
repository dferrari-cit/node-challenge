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
    
    public treatResponse(user: User): User{

        if(user.avatar == null){
            user.avatar = '../../../assets/imgs/no-image.webp'
          }
          if(user.bio == null){
            user.bio = '...'
          }
          if(user.name == null){
            user.name = '...'
          }
          if(user.urlUser == null){
            user.urlUser = '...'
          }else{
            user.urlUser = "https://github.com/" + user.urlUser.slice(29, )
          }
          if(user.starredList.length > 0){
            user.starredList.forEach(element => {
              let repository = element.urlRepository;
              element.urlRepository = "https://github.com/" + repository.slice(29, )
            })    
          }
      
          this.user = user;

        return this.user;
    }
}