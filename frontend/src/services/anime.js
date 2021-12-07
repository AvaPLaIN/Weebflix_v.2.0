//* IMPORTS
import axios from 'axios';

//* CONSTANTS
const PROXY_URL = 'http://localhost:8800/api/anime/';

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
