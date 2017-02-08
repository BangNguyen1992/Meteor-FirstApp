'user strict';
import { MyList } from '../custom/main.js';


Template.register.events({
  'submit form': function (event) {
    event.preventDefault();
    var username = event.target.registerUsername.value;
    var password = event.target.registerPassword.value;
    // var clickCount = 0;

    Accounts.createUser({
      username: username,
      password: password
    });

    Meteor.call('register', username, password);
  }
});

Meteor.subscribe('user');