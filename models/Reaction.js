//This will not be a model, but rather will be used as
//the reaction field's subdocument schema in the Thought model.

const mongoose = require('mongoose');
const thoughtSchema = require('./Thought');

const { Schema } = mongoose;

const reactionSchema = new Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {
  toJSON: {
    getters: true,
    virtuals: true,
  },
  id: false,
});

module.exports = reactionSchema;
