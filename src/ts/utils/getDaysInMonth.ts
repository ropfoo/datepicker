const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

export default getDaysInMonth;
