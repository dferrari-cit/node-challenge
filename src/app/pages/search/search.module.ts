
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InfoUserComponent } from "./info-user/info-user.component";
import { StarredListComponent } from "./starred-list/starred-list.component";

@NgModule({
    declarations: [
        InfoUserComponent,
        StarredListComponent   
    ],
    exports: [
        InfoUserComponent,
        StarredListComponent
    ],
    imports: [
        CommonModule
    ]
})

export class SearchModule{
    
}