import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from "./form/form.component";
import { HeaderComponent } from "./header/header.component";


@NgModule({
    declarations: [
        HeaderComponent, 
        FormComponent
    ],
    exports: [
        HeaderComponent, 
        FormComponent
    ],
    imports: [
        ReactiveFormsModule, 
        FormsModule, 
        CommonModule
    ]
})
export class SharedModule {}