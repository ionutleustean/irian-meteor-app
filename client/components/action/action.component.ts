import 'reflect-metadata';
import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http';

import template from './action.template.html';


@Component({
    selector: 'action',
    template
})

class Action {

    hello = "Action page";

    root = 'https://pizza-store.herokuapp.com/api/pizzas';

    posts = null;


    constructor(public http:Http) {
        this.getData();
    }








    public getData() {

        let header:Headers = new Headers();
        header.append('Content-Type', 'application/json');

        return this.http.get(this.root, {
            headers: header
        }).subscribe(data => this.posts = data.json(), err => console.log(err));;

    }

    public deletePost(id) {

        let header:Headers = new Headers();
        header.append('Content-Type', 'application/json');

        this.http.delete(this.root + "/"+ id, {
            headers: header
        }).subscribe( data => {
            console.log(data);
            this.getData();
        });
        
    }


}

export default Action;