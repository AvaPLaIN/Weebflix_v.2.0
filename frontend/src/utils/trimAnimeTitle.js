export const trimAnimeTitle = (title) => {
  //! remove symbols from title <STRING>
  const titleWithoutSymbols = title.replace(/[^a-zA-Z0-9 ]/g, " ");
  //! split String into Array
  const splitTitleWithoutSymbols = titleWithoutSymbols.split(" ");

  //! check length of first word
  if (splitTitleWithoutSymbols[0].length >= 4)
    return splitTitleWithoutSymbols[0];

  if (!splitTitleWithoutSymbols[1]) return `${splitTitleWithoutSymbols[0]}`;

  return `${splitTitleWithoutSymbols[0]} ${splitTitleWithoutSymbols[1]}`;
};
