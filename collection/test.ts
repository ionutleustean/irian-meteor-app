import {Mongo} from 'meteor/mongo';

export let Test = new Mongo.Collection('test');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('test', function tasksPublication() {
    return Test.find();
  });
}

Meteor.methods({

    'test.get' ()  {

        return Test.find().fetch();
    },
    
    'test.insert' ()  {
       return Test.insert({title: "buhu", body: "this is the body"});
    },

});