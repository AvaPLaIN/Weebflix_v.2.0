export const reduceAnimeGenres = (genres) =>
  JSON.stringify(genres.slice(Math.max(genres.length - 3, 0)));
