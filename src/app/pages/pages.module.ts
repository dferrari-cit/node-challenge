import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FilterModule } from "./filter/filter.module";
import { HomeModule } from "./home/home.module";
import { SearchModule } from "./search/search.module";

@NgModule({
    exports: [
       SharedModule 
    ],
    imports: [
        CommonModule,
        HomeModule,
        SearchModule,
        FilterModule,
        SharedModule
    ]
})

export class PagesModule {

}