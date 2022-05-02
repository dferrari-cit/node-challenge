import { NgModule } from "@angular/core";
import { FilterTableComponent } from './filter-table/filter-table.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { StarredListModalComponent } from './filter-table/starred-list-modal/starred-list-modal.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({

  declarations: [
    FilterTableComponent,
    FilterFormComponent,
  ],
  exports: [
    FilterTableComponent,
    FilterFormComponent,
  ],
  imports:[
      ReactiveFormsModule, 
      FormsModule,
      CommonModule
  ]
})

export class FilterModule {

}