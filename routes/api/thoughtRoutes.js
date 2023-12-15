const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/thought/:userId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/thought/:userId/reaction
router.route('/:thoughtId/reaction').post(addReaction);

// /api/thought/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
