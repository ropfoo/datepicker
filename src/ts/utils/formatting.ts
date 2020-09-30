/**
 * Removes spaces from Strings (e.g. " Text" => "Text")
 * @param {String} value - Input String that need to be formatted (e.g. " Text")
 * @returns {String} - Formatted String (e.g. "Text")
 */
export const removeSpaceFromString = (value: String): String => {
  return value.replace(/\s/g, '');
};

/**
 * Creates Array based on Strings separated by dash
 * @param {String} value - Strings separated by dash (e.g. "1930-2005")
 * @returns {String[]} - Array created out of dash separated elements (e.g. ["1930", "2005"])
 */
export const convertStringToArrayByDash = (value: String): String[] => {
  const dataArray: any = value.toString().split('-');
  const formattedDataArray: String[] = dataArray.map((element: String) =>
    removeSpaceFromString(element.toString())
  );
  return formattedDataArray;
};

/**
 * Adds a 0 in front of a number between 0 and 10
 * @param {number} number
 * @returns {String} - Two digit Number as String
 */
export const addZeroToNumber = (number: number): String => {
  return number > 0 && number < 10 ? `0${number}` : `${number}`;
};

/**
 * Formats Date based on given preferences
 * @param format
 * @param day
 * @param month
 * @param year
 * @returns {string} - formatted Date
 */
export const formatDate = (
  format: String,
  day: number,
  month: number,
  year: number
): string => {
  switch (format) {
    case 'd.m.yy':
      return `${day}.${month}.${year}`;
    case 'dd.mm.yy':
      return `${addZeroToNumber(day)}.${addZeroToNumber(month)}.${year}`;
    case 'm.d.yy':
      return `${month}.${day}.${year}`;
    case 'mm.dd.yy':
      return `${addZeroToNumber(month)}.${addZeroToNumber(day)}.${year}`;
    case 'yy.mm.dd':
      return `${year}.${month}.${day}`;
    default:
      return `${day}.${month}.${year}`;
  }
};
