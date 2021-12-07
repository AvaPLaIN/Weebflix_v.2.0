const express = require('express');
const router = express.Router();

//! IMPORT CONTROLLERS
const { getHighlightList } = require('../controllers/anime');

//! IMPORT MIDDLEWARE
const { protect } = require('../middleware/auth');

router.get('/getHighlightList', protect, getHighlightList);

module.exports = router;
