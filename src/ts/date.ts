import { months, month } from './months';

let currentDate: any;

let day: number;
let month: month;
let year: number;

type props = {
  monthNum?: number;
  yearNum?: number;
};

type yearRange = {
  startYear: number;
  endYear: number;
};

export const date = (
  currentMonthId: number,
  currentYear: number,
  yearRange: yearRange
) => {
  month = months[currentMonthId];
  year = currentYear;
  generateDateDiv(yearRange);
};

const updateDate = () => ({
  date: new Date(year, month.id, 1),
});

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

const switchMonth = (monthDiv: any, weekDiv: any, direction: string) => {
  let currentMonthNum = month.id;
  weekDiv.innerHTML = '';
  if (direction === 'next') {
    currentMonthNum++;
    currentMonthNum > 11 && (currentMonthNum = 0);
    month = months[currentMonthNum];
    monthDiv.innerHTML = month.nameDE;
  } else if (direction === 'prev') {
    currentMonthNum--;
    currentMonthNum < 0 && (currentMonthNum = 11);
    month = months[currentMonthNum];
    monthDiv.innerHTML = month.nameDE;
  }

  month = months[currentMonthNum];
  weekDiv.append(generateWeekDiv());
  console.log(month);
  currentDate = updateDate();
  console.log(currentDate);
};

const generateDateDiv = (yearRange: yearRange) => {
  const weekDiv = generateWeekDiv();

  // Month
  const monthDiv = document.createElement('div');
  const monthContent = document.createTextNode(month.nameDE);
  monthDiv.append(monthContent);

  // Next Month
  const nextMonthBtn = document.createElement('button');
  const nextMonthBtnContent = document.createTextNode('>');
  nextMonthBtn.append(nextMonthBtnContent);
  nextMonthBtn.addEventListener('click', () => {
    switchMonth(monthDiv, weekDiv, 'next');
  });

  // Prev Month
  const prevMonthBtn = document.createElement('button');
  const prevMonthBtnContent = document.createTextNode('<');
  prevMonthBtn.append(prevMonthBtnContent);
  prevMonthBtn.addEventListener('click', () => {
    switchMonth(monthDiv, weekDiv, 'prev');
  });

  // Year
  const yearDiv = document.createElement('div');
  const yearDropdown = document.createElement('select');
  for (
    let selectedYear = yearRange.startYear;
    selectedYear <= yearRange.endYear;
    selectedYear++
  ) {
    const yearOption = document.createElement('option');
    yearOption.value = selectedYear.toString();
    yearOption.innerHTML = selectedYear.toString();
    yearDropdown.append(yearOption);
  }
  yearDropdown.value = yearRange.endYear.toString();
  yearDropdown.addEventListener('change', (e) => {
    weekDiv.innerHTML = '';
    const element = e.currentTarget as HTMLInputElement;
    year = parseInt(element.value);
    weekDiv.append(generateWeekDiv());
    currentDate = updateDate();
    console.log(currentDate);
  });
  yearDiv.append(yearDropdown);

  const dateDiv = document.createElement('div');
  dateDiv.append(yearDiv, prevMonthBtn, monthDiv, nextMonthBtn, weekDiv);

  const target = document.getElementById('datepicker');
  document.body.insertBefore(dateDiv, target);
};

const generateWeekDiv = () => {
  const weekDiv = document.createElement('div');

  for (let day = 1; day <= getDaysInMonth(month.number, year); day++) {
    // Day
    const dayDiv = document.createElement('div');
    const dayContent = document.createTextNode(day.toString());
    dayDiv.append(dayContent);
    weekDiv.append(dayDiv);
  }

  return weekDiv;
};
