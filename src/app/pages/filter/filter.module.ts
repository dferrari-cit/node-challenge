import { NgModule } from "@angular/core";
import { FilterTableComponent } from './filter-table/filter-table.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {MatPaginatorModule} from '@angular/material/paginator';
import { RouterModule } from "@angular/router";
import { MatDialogModule } from "@angular/material/dialog";
import { FilterComponent } from "./filter.component";

@NgModule({

  declarations: [
    FilterComponent,
    FilterTableComponent,
    FilterFormComponent
  ],
  imports:[
      ReactiveFormsModule, 
      FormsModule,
      CommonModule,
      MatPaginatorModule,
      MatDialogModule,
      RouterModule
  ]
})

export class FilterModule {

}