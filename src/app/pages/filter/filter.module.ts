import { NgModule } from "@angular/core";
import { FilterTableComponent } from './filter-table/filter-table.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { StarredListModalComponent } from './filter-table/starred-list-modal/starred-list-modal.component';

@NgModule({

  declarations: [
    FilterTableComponent,
    FilterFormComponent,
    StarredListModalComponent,
  ],
  exports: [
    FilterTableComponent,
    FilterFormComponent,
    StarredListModalComponent
  ]
})

export class FilterModule {

}