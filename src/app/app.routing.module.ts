import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./home/form/form.component";


const routes: Routes = [
    {
        path: '',
        component: FormComponent,
    }
]

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}