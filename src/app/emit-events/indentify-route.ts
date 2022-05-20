
import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class IndentifyRoute { 

    emitRoute = new EventEmitter<string>();

    constructor() {}

    menuEmitPage(page: string){
        this.emitRoute.emit(page);
    }

    indentifyPage(): string{
        var page: string = window.location.href.slice(22);

        if( page.indexOf('home') >=0 ){ page = 'Home' }
        if( page.indexOf('filter') >=0 ){ page = 'Histórico' }
        if( page.indexOf('search') >=0 ){ page = 'Pesquisa' }

        
        return page;
    }

}