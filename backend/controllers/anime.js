//* IMPORTS
const ErrorResponse = require('../utils/errorResponse');
const Anime = require('../models/Anime');

exports.getHighlightList = async (req, res, next) => {
  try {
    const highlightAnimeList = await Anime.aggregate([
      { $sample: { size: 5 } },
    ]);

    if (!highlightAnimeList)
      return next(new ErrorResponse('No Data found', 400));

    res.status(200).json({
      success: true,
      data: highlightAnimeList,
    });
  } catch (error) {
    next(error);
  }
};
