import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
    { path:'', redirectTo:'/list', pathMatch:'full'},
    { path:'list', component:HomeComponent},
    { path:'create', component:CreateComponent }
]

@NgModule({
    imports : [ RouterModule.forRoot( routes 
        // ,
        // { enableTracing: true } // <-- debugging purposes only
      ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter{ }