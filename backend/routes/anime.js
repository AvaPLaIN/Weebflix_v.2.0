const express = require("express");
const router = express.Router();

//! IMPORT CONTROLLERS
const {
  getHighlightList,
  getProgressList,
  getAnimeById,
  getSimilarAnimesToTitle,
  getRecommendationAnimesByGenres,
  updateProgressAnimeList,
  updateProgressAnimeListStats,
} = require("../controllers/anime");

//! IMPORT MIDDLEWARE
const { protect } = require("../middleware/auth");

router.get("/getHighlightList", protect, getHighlightList);
router.get("/getProgressAnimeList", protect, getProgressList);
router.get("/getAnimeById/:id", protect, getAnimeById);
router.get("/getSimilarAnimesToTitle/:title", protect, getSimilarAnimesToTitle);
router.get(
  "/getRecommendationAnimesByGenres/:genres",
  protect,
  getRecommendationAnimesByGenres
);
router.post("/updateProgressAnimeList", protect, updateProgressAnimeList);
router.post(
  "/updateProgressAnimeListStats",
  protect,
  updateProgressAnimeListStats
);

module.exports = router;
