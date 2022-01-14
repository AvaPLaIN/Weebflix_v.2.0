//* IMPORTS
//     * SERVICES
import {
  getProgressAnimeList,
  updateProgressAnimeList,
  updateProgressAnimeListStats,
} from "../../services/anime";

//* CONSTANTS
//     * DATA
export const FETCH_PROGRESS_ANIME_LIST_REQUEST =
  "REDUX/ANIME/FETCH_PROGRESS_ANIME_LIST_REQUEST";
export const FETCH_PROGRESS_ANIME_LIST_SUCCESS =
  "REDUX/ANIME/FETCH_PROGRESS_ANIME_LIST_SUCCESS";
export const FETCH_PROGRESS_ANIME_LIST_FAILURE =
  "REDUX/ANIME/FETCH_PROGRESS_ANIME_LIST_FAILURE";

export const UPDATE_PROGRESS_ANIME_LIST_REQUEST =
  "REDUX/ANIME/UPDATE_PROGRESS_ANIME_LIST_REQUEST";
export const UPDATE_PROGRESS_ANIME_LIST_SUCCESS =
  "REDUX/ANIME/UPDATE_PROGRESS_ANIME_LIST_SUCCESS";
export const UPDATE_PROGRESS_ANIME_LIST_FAILURE =
  "REDUX/ANIME/UPDATE_PROGRESS_ANIME_LIST_FAILURE";

//* INIT
const initialState = {
  loading: false,
  progressList: [],
  error: "",
};

//* REDUCERS
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //     * REGISTER
    case FETCH_PROGRESS_ANIME_LIST_REQUEST:
      return { ...state, loading: true };
    case FETCH_PROGRESS_ANIME_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        progressList: action.payload,
        error: "",
      };
    case FETCH_PROGRESS_ANIME_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        progressList: [],
        error: action.payload,
      };

    case UPDATE_PROGRESS_ANIME_LIST_REQUEST:
      return { ...state, loading: true };
    case UPDATE_PROGRESS_ANIME_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        progressList: action.payload,
        error: "",
      };
    case UPDATE_PROGRESS_ANIME_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        progressList: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

//* ACTIONS
//     * PROGRESS LIST
export const fetch_progress_anime_list_request = () => {
  return { type: FETCH_PROGRESS_ANIME_LIST_REQUEST };
};
export const fetch_progress_anime_list_success = (progressAnimeList) => {
  return {
    type: FETCH_PROGRESS_ANIME_LIST_SUCCESS,
    payload: progressAnimeList,
  };
};
export const fetch_progress_anime_list_failure = (error) => {
  return {
    type: FETCH_PROGRESS_ANIME_LIST_FAILURE,
    payload: error,
  };
};
export const fetch_progress_anime_list = (accessToken) => async (dispatch) => {
  dispatch(fetch_progress_anime_list_request());

  const data = await getProgressAnimeList(accessToken);

  if (data?.error && !data?.success)
    return dispatch(fetch_progress_anime_list_failure(data?.error));

  return dispatch(fetch_progress_anime_list_success(data?.data));
};

//     * PROGRESS LIST UPDATE
export const update_progress_anime_list_request = () => {
  return { type: UPDATE_PROGRESS_ANIME_LIST_REQUEST };
};
export const update_progress_anime_list_success = (progressAnimeList) => {
  return {
    type: UPDATE_PROGRESS_ANIME_LIST_SUCCESS,
    payload: progressAnimeList,
  };
};
export const update_progress_anime_list_failure = (error) => {
  return {
    type: UPDATE_PROGRESS_ANIME_LIST_FAILURE,
    payload: error,
  };
};
export const update_progress_anime_list =
  (accessToken, animeID, indexOfProgressAnime, episodeCount, status) =>
  async (dispatch) => {
    dispatch(update_progress_anime_list_request());

    const data = await updateProgressAnimeList(
      accessToken,
      animeID,
      indexOfProgressAnime,
      episodeCount,
      status
    );

    if (data?.error && !data?.success)
      return dispatch(update_progress_anime_list_failure(data?.error));

    return dispatch(update_progress_anime_list_success(data?.data));
  };
export const update_progress_anime_list_stats =
  (accessToken, status, progressID, count, rating) => async (dispatch) => {
    dispatch(update_progress_anime_list_request());

    const data = await updateProgressAnimeListStats(
      accessToken,
      progressID,
      status,
      count,
      rating
    );

    if (data?.error && !data?.success)
      return dispatch(update_progress_anime_list_failure(data?.error));

    return dispatch(update_progress_anime_list_success(data?.data));
  };

//* EXPORT
export default reducer;
