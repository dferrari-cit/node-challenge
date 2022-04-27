import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { SearchErrosComponent } from "./pages/search/search-erros/search-erros.component";
import { SearchComponent } from "./pages/search/search.component";
import { SearchResolver } from "./pages/search/search.resolver";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home', pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'search',
        component: SearchComponent,
    },
    {
        path: 'search/:userName',
        component: SearchComponent,
        resolve: {
            user: SearchResolver
        }
    },
    {
        path: 'search/error/:typeError',
        component: SearchErrosComponent,
    },
]

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}