//* IMPORTS
const ErrorResponse = require("../utils/errorResponse");
const { Anime } = require("../models/Anime");
const { AnimeProgress } = require("../models/AnimeProgress");

exports.getHighlightList = async (req, res, next) => {
  try {
    const highlightAnimeList = await Anime.aggregate([
      { $sample: { size: 5 } },
    ]);

    if (!highlightAnimeList)
      return next(new ErrorResponse("No Data found", 400));

    res.status(200).json({
      success: true,
      data: highlightAnimeList,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProgressList = async (req, res, next) => {
  try {
    if (!req.user.progress.length)
      return next(new ErrorResponse("No Progress found", 400));

    const { progress } = await req.user.populate({
      path: "progress",
      populate: {
        path: "anime_id",
        model: "Anime",
      },
    });

    res.status(200).json({
      success: true,
      data: progress,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAnimeById = async (req, res, next) => {
  try {
    const animeById = await Anime.findOne({ _id: req.params.id });

    if (!animeById) return next(new ErrorResponse("No Data found", 404));

    res.status(200).json({
      success: true,
      data: animeById,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSimilarAnimesToTitle = async (req, res, next) => {
  const { title } = req?.params;

  if (!title) return next(new ErrorResponse("No Similar Animes Found", 404));

  try {
    const similarAnimes = await Anime.find({
      title: { $regex: new RegExp(`.*${title}.*`), $options: "i" },
    }).select(["_id", "title", "thumnail"]);

    if (!similarAnimes)
      return next(new ErrorResponse("No Similar Animes Found", 404));

    res.status(200).json({
      success: true,
      data: similarAnimes,
    });
  } catch (error) {
    next(error);
  }
};
