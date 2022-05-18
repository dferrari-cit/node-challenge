import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FilterComponent } from "./filter/filter.component";
import { FilterModule } from "./filter/filter.module";
import { HomeComponent } from "./home/home.component";
import { HomeModule } from "./home/home.module";
import { SearchErrosComponent } from "./search/search-erros/search-erros.component";
import { SearchComponent } from "./search/search.component";
import { SearchModule } from "./search/search.module";

@NgModule({
    declarations: [
        HomeComponent,
        SearchComponent,
        SearchErrosComponent,
        FilterComponent
    ],
    exports: [
        SharedModule
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeModule,
        SearchModule,
        FilterModule
    ]
})

export class PagesModule {

}