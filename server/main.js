import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup
  const userCount = Meteor.users.find().count();
  const email = 'demo@demo.com';
  const password = 'demo';
  if (!userCount) {
    Accounts.createUser({
      username: 'demoUser',
      email,
      password
    });

  }
});
