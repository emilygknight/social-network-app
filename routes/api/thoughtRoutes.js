const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../thought/thoughtController');

// /api/students
router.route('/').get(getThought).post(createThought);

// /api/students/:studentId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/students/:studentId/assignments
router.route('/:thoughtId/reaction').post(addReaction);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
