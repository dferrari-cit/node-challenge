import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../interfaces/user";

@Injectable({ providedIn: 'root' })
export class SearchEmitEventService { 

    emitUserModal = new EventEmitter<User>();

    constructor() {

    }

    emitUser(userModel: User){
        this.emitUserModal.emit(userModel);
    }

}