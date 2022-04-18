import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
    declarations: [
        FormComponent,
        InfoUserComponent,
        SnackbarComponent
    ],
    imports: [
        ReactiveFormsModule, 
        FormsModule, 
        CommonModule,
        RouterModule,
        MatSnackBarModule       
    ]
})
export class HomeModule { }