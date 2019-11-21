import { RestaurantsComponent } from './restaurants/restaurants.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

const routes: Routes=[
   {
       path:"restaurants",
       component: RestaurantsComponent
   }
];

@NgModule({
    imports: [
        NativeScriptRouterModule, 
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        BottomBarComponent,RestaurantsComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class HomeModule { }