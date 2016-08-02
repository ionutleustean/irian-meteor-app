import 'reflect-metadata';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Mongo }     from 'meteor/mongo';
import { Test } from '../../../collection/test'

import template from './about.template.html';


@Component({
    selector: 'about',
    template
})

class About {

    hello = "";

    test : Mongo.Cursor<Test>;

    data = [];

    constructor(){

        this.hello = "About page ex"

        let self = this;
        Meteor.call('test.get', (err, data) => {
            if(data){
                self.data = data;
                console.log(data);
            }
            else{
                console.log(err);
            }
        });

    }



}

export default About;