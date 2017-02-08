import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


export var MyList = new Mongo.Collection('lianatest');

if (Meteor.isServer) {
  Meteor.methods({
    'register': function (username, passwordVar) {

      MyList.insert({
        _id: username,
        clickCount: Number
      })
    }
  })

  Meteor.publish('user', function () {
    return MyList.find();
  });
}