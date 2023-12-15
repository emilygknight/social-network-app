const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController.js');

// /api/users
//gets all users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router
  .route('/:_id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// router.post('/:userId/friends/:friendId', addFriend);

// router.delete('/:userId/friends/:friendId', removeFriend);


module.exports = router;

