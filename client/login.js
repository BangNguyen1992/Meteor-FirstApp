
import { Meteor } from 'meteor/meteor';
import { MyList } from '../custom/main.js';
// import { main } from './animation.js';


Template.login.events({
  'submit form': function (event) {
    event.preventDefault();

    var username = event.target.loginUsername.value;
    var password = event.target.loginPassword.value;

    Meteor.loginWithPassword(username, password, function (err) {
      if (!err) {
        console.log("User logged in");

      } else {
        // Do something on error....
        console.log("Not logged in, and error occurred:", err);  // Outputs error
        alert(err);
      }

    });

  }
});