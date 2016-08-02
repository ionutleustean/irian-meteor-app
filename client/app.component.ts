import 'reflect-metadata';
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {HTTP_BINDINGS} from '@angular/http'
import About from './components/about/about.component';
import Action from './components/action/action.component';

import { provideRouter, RouterConfig, ROUTER_DIRECTIVES} from '@angular/router';

import template from './app.template.html';
import 'bootstrap/dist/css/bootstrap.css';




const routes: RouterConfig = [
    { path: '', component: About },
    { path: 'action', component: Action },
];

export const appRouterProviders = [
    provideRouter(routes)
];


@Component({
    selector: 'app',
    template,
    directives: [ROUTER_DIRECTIVES],


})
class Socially {


    hello = true;
    internetStatus = false;

    constructor(){
        Meteor.subscribe('tasks');
    }

    getInternetStatus(){
        this.internetStatus = navigator.onLine ;
        let self = this;
        window.addEventListener("offline", function(e) { self.internetStatus =  navigator.onLine });
        window.addEventListener("online", function(e) { self.internetStatus =  navigator.onLine });

        if(this.internetStatus === true){
            return "btn-success";
        }else{
            return "btn-danger";
        }
    }


}

bootstrap(Socially, [
    appRouterProviders,
    HTTP_BINDINGS
]);