//* IMPORTS
import axios from "axios";

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
