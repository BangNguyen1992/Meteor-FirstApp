import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
// import { Mongo } from 'meteor/mongo';

import './main.html';
import { MyList } from '../custom/main.js';




Template.count.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  console.log(MyList.find().fetch()); //checking the security "autopublish & insecure""
});

Template.count.helpers({
  //display username
  username() {
    if (Meteor.user()) //Check login
      return Meteor.user().username;
    else
      return "Guest";
  },
  //counting the click
  counter() {
    if (Meteor.user())
      return MyList.findOne({ _id: Meteor.user().username }).clickCount;
    else
      return Template.instance().counter.get();

  },
});

Template.count.events({
  'click .click'(event, instance) { // increment the counter when button is clicked

    if (Meteor.user())
      // console.log(MyList.findOne({_id: Meteor.user().username}))
      Meteor.call('counting');
      // MyList.update({ _id: Meteor.user().username }, { $inc: { clickCount: 10 } });
    else
      instance.counter.set(instance.counter.get() + 1);
  },
});

Template.dashboard.events({
  'click .logout': function (event) {
    event.preventDefault();
    Meteor.logout();
  }
});




