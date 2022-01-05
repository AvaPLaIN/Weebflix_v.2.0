const express = require("express");
const router = express.Router();

//! IMPORT CONTROLLERS
const {
  getHighlightList,
  getProgressList,
  getAnimeById,
  getSimilarAnimesToTitle,
} = require("../controllers/anime");

//! IMPORT MIDDLEWARE
const { protect } = require("../middleware/auth");

router.get("/getHighlightList", protect, getHighlightList);
router.get("/getProgressAnimeList", protect, getProgressList);
router.get("/getAnimeById/:id", protect, getAnimeById);
router.get("/getSimilarAnimesToTitle/:title", protect, getSimilarAnimesToTitle);

module.exports = router;
