import { Meteor } from 'meteor/meteor';
import { Notes } from '../imports/collections/notes';

Meteor.startup(() => {
  // code to run on server at startup
  const user = Meteor.users.findOne();
  if (!user) {
    Accounts.createUser({
      email: 'demo@demo.com',
      password: 'demo'
    });
  }

  Meteor.publish('notes', function () {
    return Notes.find({ ownerId: this.userId });
  });
});
