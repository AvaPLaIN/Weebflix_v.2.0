const express = require('express');
const router = express.Router();

//! IMPORT CONTROLLERS
const {} = require('../controllers/anime');

//! IMPORT MIDDLEWARE
const { protect } = require('../middleware/auth');

router.get('/all', protect, getData);

module.exports = router;
