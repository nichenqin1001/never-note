import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
// libs
import moment from 'moment';

Meteor.methods({
  'notes.insert'(title = '', content = '') {
    if (!Meteor.userId()) throw new Meteor.Error('not authenticated');

    return Notes.insert({
      title,
      content,
      ownerId: Meteor.userId(),
      updatedAt: moment().valueOf(),
      createdAt: moment().valueOf()
    });

  },

  'notes.update'(note, updates) {
    if (!Meteor.userId()) throw new Meteor.Error('not authenticated');

    return Notes.update(note, { $set: { updatedAt: moment().valueOf(), ...updates } });
  },

  'notes.remove'(note) {
    if (!Meteor.userId()) throw new Meteor.Error('not authenticated');

    return Notes.remove(note);
  }
});

export const Notes = new Mongo.Collection('notes');
