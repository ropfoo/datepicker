/**
 * Returns the amount of days in a month of a year
 * @param {number} month
 * @param {number} year
 * @returns {number} - amount of days in month as number
 */
const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};

export default getDaysInMonth;
