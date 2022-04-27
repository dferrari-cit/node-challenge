import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "src/app/interfaces/user";
import { UserService } from "src/app/services/user.service";

@Injectable({ providedIn: 'root'})
export class SearchResolver implements Resolve<Observable<User>> {

    constructor(private userService: UserService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        const userName = route.params['userName'];

        return this.userService.findUser(userName);
    }
    
}