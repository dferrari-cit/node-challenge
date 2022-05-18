
import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class IndentifyRoute { 

    emitRoute = new EventEmitter<string>();

    constructor() {}

    emitPage(page: string){
        this.emitRoute.emit(page);
    }

}