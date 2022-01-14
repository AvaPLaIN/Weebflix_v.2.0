//* IMPORTS
import axios from "axios";
import { trimAnimeTitle } from "../utils/trimAnimeTitle";
import { reduceAnimeGenres } from "../utils/reduceAnimeGenres";

//* CONSTANTS
const PROXY_URL = "http://localhost:8800/api/anime";

//* SERVICES
//! getHighlightAnimeList
export const getHighlightAnimeList = async (accessToken) => {
  try {
    const data = await axios.get(`${PROXY_URL}/getHighlightList`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return data?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const getProgressAnimeList = async (accessToken) => {
  try {
    const data = await axios.get(`${PROXY_URL}/getProgressAnimeList`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return data?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const updateProgressAnimeList = async (
  accessToken,
  animeID,
  indexOfProgressAnime,
  episodeCount,
  status
) => {
  try {
    const data = await axios.post(
      `${PROXY_URL}/updateProgressAnimeList`,
      {
        animeID,
        indexOfProgressAnime,
        episodeCount,
        status,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return data?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const updateProgressAnimeListStats = async (
  accessToken,
  progressID,
  status,
  count,
  rating
) => {
  try {
    const data = await axios.post(
      `${PROXY_URL}/updateProgressAnimeListStats`,
      {
        progressID,
        status,
        count,
        rating,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return data?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const getAnimeById = async (accessToken, id) => {
  try {
    const data = await axios.get(`${PROXY_URL}/getAnimeById/${id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return data?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const getSimilarAnimeAsAnimeTitle = async (accessToken, title) => {
  try {
    const data = await axios.get(
      `${PROXY_URL}/getSimilarAnimesToTitle/${trimAnimeTitle(title)}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return data?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const getRecommendationAnimesByGenres = async (accessToken, genres) => {
  if (!genres) return;
  const reducedAnimeGenres = reduceAnimeGenres(genres);
  try {
    const data = await axios.get(
      `${PROXY_URL}/getRecommendationAnimesByGenres/${reducedAnimeGenres}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return data?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const getSearchAnimesByTitle = async (accessToken, title) => {
  if (!title) return;
  try {
    const data = await axios.get(
      `${PROXY_URL}/getSimilarAnimesToTitle/${title}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return data?.data;
  } catch (error) {
    return error?.response?.data;
  }
};
