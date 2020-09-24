/**
 * Removes spaces from Strings (e.g. " Text" => "Text")
 * @param {String} value - Input String that need to be formatted (e.g. " Text")
 * @returns {String} - Formatted String (e.g. "Text")
 */
export const removeSpaceFromString = (value: String) => {
  return value.replace(/\s/g, '');
};

/**
 * Creates Array based on Strings separated by dash
 * @param {String} value - Strings separated by dash (e.g. "1930-2005")
 * @returns {Array} - Array created out of dash separated elements (e.g. ["1930", "2005"])
 */
export const convertStringToArrayByDash = (value: String) => {
  const dataArray: any = value.toString().split('-');
  const formattedDataArray = dataArray.map((element: String) =>
    removeSpaceFromString(element.toString())
  );
  return formattedDataArray;
};
