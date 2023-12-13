const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtsSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

module.exports = thoughtsSchema;
