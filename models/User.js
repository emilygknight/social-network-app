const mongoose = require('mongoose');
const { Schema, model, Types } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true, // Ensures uniqueness
      required: true, // Makes the field required
      trim: true, // Trims leading and trailing whitespaces
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true, // Optional: store emails in lowercase
      validate: {
        validator: function(value) {
          // Use a regular expression to validate the email format
          return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value);
        },
        message: 'Invalid email address',
      },
    },
    thought: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'thought', // Reference to the Thought model
    }],
    friends: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// creating a virtual called friendCount that retrieves the 
// length of the users friends array field on query
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
