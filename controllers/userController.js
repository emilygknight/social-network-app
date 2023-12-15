const { User , Thought } = require('../models');

module.exports = {
  // Get all users
  async getUser(req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params._id })
        .select('-__v');
        console.log(user);

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params._id });
      
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
  
      await Thought.deleteMany({ _id: { $in: user.thought } });
  
      return res.json({ message: 'User and thoughts deleted!' });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const { _id, friendId } = req.params;
  
      // Find the user by their userId
      const user = await User.findOne({ _id: _id });
  
      // If the user doesn't exist, return an error message
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
  
      // Add the friendId to the user's friends array
      user.friends.push(friendId);
  
      // Save the updated user
      await user.save();
  
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const { _id, friendId } = req.params;
  
      // Find the user by their userId
      const user = await User.findOne({ _id: _id });
  
      // If the user doesn't exist, return an error message
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
  
      // Add the friendId to the user's friends array
      user.friends.push(friendId);
  
      // Save the updated user
      await user.save();
  
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // Remove a friend from a user's friend list
  async removeFriend(req, res) {
    try {
      const { _id, friendId } = req.params;
  
      // Find the user by their userId
      const user = await User.findOne({ _id: _id });
  
      // If the user doesn't exist, return an error message
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
  
      // Remove the friendId from the user's friends array
      user.friends.pull(friendId);
  
      // Save the updated user
      await user.save();
  
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
