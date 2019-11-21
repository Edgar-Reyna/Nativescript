import { Component } from "@angular/core";
import {Page} from 'tns-core-modules/ui/page/page'

@Component({
    templateUrl: "./register.component.html"
})
export class RegisterComponent { 
    constructor(private page: Page){
        this.page.actionBarHidden=true;
    }
}