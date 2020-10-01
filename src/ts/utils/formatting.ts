/**
 * Removes spaces from Strings (e.g. " Text" => "Text")
 * @param {string} value - Input string that need to be formatted (e.g. " Text")
 * @returns {string} - Formatted string (e.g. "Text")
 */
export const removeSpaceFromString = (value: string): string => {
  return value.replace(/\s/g, '');
};

/**
 * Creates Array based on Strings separated by dash
 * @param {string} value - Strings separated by dash (e.g. "1930-2005")
 * @returns {string[]} - Array created out of dash separated elements (e.g. ["1930", "2005"])
 */
export const convertStringToArrayByDash = (value: string): string[] => {
  const dataArray: any = value.toString().split('-');
  const formattedDataArray: string[] = dataArray.map((element: string) =>
    removeSpaceFromString(element.toString())
  );
  return formattedDataArray;
};

/**
 * Adds a 0 in front of a number between 0 and 10
 * @param {number} number
 * @returns {string} - Two digit Number as string
 */
export const addZeroToNumber = (number: number): string => {
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
  format: string,
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
