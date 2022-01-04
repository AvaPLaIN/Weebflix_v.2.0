//* IMPORTS
const mongoose = require("mongoose");
const { AnimeSchema } = require("./Anime");

//! SCHEMA
const AnimeProgressSchema = new mongoose.Schema({
  anime_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Anime",
    required: true,
  },
  count: {
    type: Number,
    default: 1,
  },
  status: {
    type: String,
    default: "currently watching",
  },
  rating: {
    type: Number,
    default: -1,
  },
});

const AnimeProgress = mongoose.model("AnimeProgress", AnimeProgressSchema);

module.exports = { AnimeProgress, AnimeProgressSchema };
