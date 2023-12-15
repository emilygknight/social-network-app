const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThought).post(createThought);

// /api/students/:userId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/students/:userId/reaction
router.route('/:thoughtId/reaction').post(addReaction);

// /api/students/:userId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
