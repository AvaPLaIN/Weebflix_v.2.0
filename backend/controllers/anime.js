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

exports.updateProgressAnimeList = async (req, res, next) => {
  const { animeID, indexOfProgressAnime, episodeCount, status } = req?.body;

  if (indexOfProgressAnime === -1) {
    const newAnimeProgress = await AnimeProgress.create({
      anime_id: animeID,
      count: episodeCount,
      status,
      rating: -1,
    });
    if (!newAnimeProgress)
      return next(new ErrorResponse("something went wrong", 400));
    await newAnimeProgress.save();

    req.user.progress.unshift(newAnimeProgress._id);
  } else {
    const progressID = req.user.progress[indexOfProgressAnime];
    const progressItem = await AnimeProgress.findOne({ _id: progressID });
    if (!progressItem)
      return next(new ErrorResponse("something went wrong", 400));

    progressItem.count = episodeCount;
    progressItem.status = status;
    await progressItem.save();

    req.user.progress.splice(indexOfProgressAnime, 1);
    req.user.progress.unshift(progressID);
  }

  await req?.user.save();

  const { progress } = await req.user.populate({
    path: "progress",
    populate: {
      path: "anime_id",
      model: "Anime",
    },
  });

  try {
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
    })
      .limit(100)
      .select(["_id", "title", "thumnail", "banner"]);

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

exports.getRecommendationAnimesByGenres = async (req, res, next) => {
  const { genres } = req?.params;

  if (!genres) return next(new ErrorResponse("provide genres", 404));

  try {
    const recommendationAnimesByGenres = await Anime.find({
      genres: { $all: JSON.parse(genres) },
    })
      .select(["_id", "title", "thumnail"])
      .limit(25);
    if (!recommendationAnimesByGenres)
      return next(new ErrorResponse("No Recommendation Animes Found", 404));
    res.status(200).json({
      success: true,
      data: recommendationAnimesByGenres,
    });
  } catch (error) {
    next(error);
  }
};
