/**
 * Returns the amount of days in a month of a year
 * @param {number} month
 * @param {number} year
 */
const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

export default getDaysInMonth;
