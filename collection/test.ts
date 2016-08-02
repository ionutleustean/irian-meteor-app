import {Mongo} from 'meteor/mongo';

export let Test = new Ground.Collection('test');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('test', function tasksPublication() {
    return Test.find();
  });
}

Meteor.methods({

    'test.get' ()  {
    	a = Test.find().fetch();
    	console.log(a);
        return a;
    },
    
    'test.insert' ()  {
       return Test.insert({title: "buhu", body: "this is the body"});
    },

});