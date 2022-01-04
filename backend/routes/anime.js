const express = require("express");
const router = express.Router();

//! IMPORT CONTROLLERS
const {
  getHighlightList,
  getProgressList,
  getAnimeById,
} = require("../controllers/anime");

//! IMPORT MIDDLEWARE
const { protect } = require("../middleware/auth");

router.get("/getHighlightList", protect, getHighlightList);
router.get("/getProgressAnimeList", protect, getProgressList);
router.get("/getAnimeById/:id", protect, getAnimeById);

module.exports = router;
