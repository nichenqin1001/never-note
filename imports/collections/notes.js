import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import moment from 'meteor/momentjs:moment';

Meteor.methods({
  'notes.insert'() {
    if (!Meteor.userId()) throw new Meteor.Error('not authenticated');

    return Meteor.insert({
      title: '',
      content: '',
      ownerId: Meteor.userId(),
      updatedAt: moment().valueOf(),
      createdAt: moment().valueOf()
    });

  }
});

export const Notes = new Mongo.Collection('notes');