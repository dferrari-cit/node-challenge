import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule} from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { RouterModule } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { HeaderComponent } from "./header/header.component";
import { MenuModalComponent } from './menu-modal/menu-modal.component';


@NgModule({
    declarations: [
        HeaderComponent, 
        FormComponent, 
        MenuModalComponent
    ],
    exports: [
        HeaderComponent, 
        FormComponent
    ],
    imports: [
        ReactiveFormsModule, 
        FormsModule, 
        CommonModule,
        MatDialogModule,
        MatSnackBarModule,
        RouterModule
    ]
})
export class SharedModule {}