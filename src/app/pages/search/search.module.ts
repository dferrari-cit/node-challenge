
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InfoUserComponent } from "./info-user/info-user.component";
import { SearchErrosComponent } from "./search-erros/search-erros.component";
import { SearchModalComponent } from "./search-modal/search-modal.component";
import { SearchComponent } from "./search.component";
import { StarredListComponent } from "./starred-list/starred-list.component";

@NgModule({
    declarations: [
        SearchComponent,
        InfoUserComponent,
        StarredListComponent,
        SearchErrosComponent,
        SearchModalComponent   
    ],
    imports: [
        CommonModule
    ]
})

export class SearchModule{
    
}