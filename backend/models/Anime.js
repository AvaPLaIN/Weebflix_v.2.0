//* IMPORTS
const mongoose = require("mongoose");

//! SCHEMA
const AnimeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Provide title"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  banner: {
    type: [String],
    required: [true, "Provide banner"],
    trim: true,
  },
  thumnail: {
    type: String,
    required: [true, "Provide thumnail"],
    trim: true,
  },
  logo: {
    type: String,
    trim: true,
  },
  trailer: {
    type: String,
    trim: true,
  },
  genres: {
    type: [String],
    trim: true,
  },
  status: {
    type: String,
    required: [true, "Provide status"],
    trim: true,
  },
  version: {
    type: String,
    required: [true, "Provide version"],
    trim: true,
  },
  released: {
    type: String,
    trim: true,
  },
  episodes: {
    type: [String],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Anime = mongoose.model("Anime", AnimeSchema);

module.exports = { Anime, AnimeSchema };
