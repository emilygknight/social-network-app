const router = require('express').Router();
const courseRoutes = require('./userRoutes');
const studentRoutes = require('./thoughtRoutes');

router.use('/user', courseRoutes);
router.use('/thought', studentRoutes);

module.exports = router;
