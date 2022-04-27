
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InfoUserComponent } from "./info-user/info-user.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { StarredListComponent } from "./starred-list/starred-list.component";

@NgModule({
    declarations: [
        InfoUserComponent,
        StarredListComponent,
        SnackbarComponent       
    ],
    exports: [
        InfoUserComponent,
        StarredListComponent,
        SnackbarComponent  
    ],
    imports: [
        CommonModule
    ]
})

export class SearchModule{
    
}