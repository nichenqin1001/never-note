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
      createdAt: moment().valueOf(),
      sharedWith: []
    });

  },

  'notes.update'(note, updates) {
    if (!Meteor.userId()) throw new Meteor.Error('not authenticated');

    return Notes.update(note, { $set: { updatedAt: moment().valueOf(), ...updates } });
  },

  'notes.remove'(note) {
    if (!Meteor.userId()) throw new Meteor.Error('not authenticated');

    return Notes.remove(note);
  },

  'notes.share'(note, email) {
    if (!Meteor.userId()) throw new Meteor.Error('not authenticated');

    const userExists = !!Meteor.users.findOne({ "email.address": email });
    if (!userExists) throw new Meteor.Error('没有找到用户');

    return Notes.update(note, { $push: { sharedWith: email } });
  }
});

export const Notes = new Mongo.Collection('notes');
