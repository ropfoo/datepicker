import { months, month } from './utils/months';
import createWeek from './dom/createWeek';
import createYears, { yearRange } from './dom/createYears';

let dateHTML: any;

let currentDate: any;

export type displayDate = {
  day: number;
  month: month;
  year: number;
};

let displayDate: displayDate;

export const date = (
  dateDiv: HTMLElement | HTMLInputElement | null,
  yearRange: yearRange
) => {
  dateHTML = dateDiv;
  const today = new Date();
  displayDate = {
    day: 1,
    month: months[today.getMonth()],
    year: today.getFullYear(),
  };

  console.log('test', displayDate);

  generateDateDiv(yearRange);
};

export const updateDate = ({ day, month, year }: displayDate) => {
  //   if (dateHTML) {
  //     dateHTML.value = `${day}.${month}.${year}`;
  //   }
  return {
    date: new Date(year, month.id, day),
  };
};

const switchMonth = (monthDiv: any, dateDiv: any, direction: string) => {
  let currentMonthNum = displayDate.month.id;
  dateDiv.lastChild.remove();
  if (direction === 'next') {
    currentMonthNum++;
    currentMonthNum > 11 && (currentMonthNum = 0);
    displayDate.month = months[currentMonthNum];
    monthDiv.innerHTML = displayDate.month.nameDE;
  } else if (direction === 'prev') {
    currentMonthNum--;
    currentMonthNum < 0 && (currentMonthNum = 11);
    displayDate.month = months[currentMonthNum];
    monthDiv.innerHTML = displayDate.month.nameDE;
  }

  displayDate.month = months[currentMonthNum];
  dateDiv.append(createWeek(currentDate, displayDate));
  console.log(displayDate.month);
  currentDate = updateDate(displayDate);
  console.log(currentDate);
};

const generateDateDiv = (yearRange: yearRange) => {
  const weekDiv = createWeek(currentDate, displayDate);
  const dateDiv = document.createElement('div');

  // Month
  const monthDiv = document.createElement('div');
  const monthContent = document.createTextNode(displayDate.month.nameDE);
  monthDiv.append(monthContent);

  // Next Month
  const nextMonthBtn = document.createElement('button');
  const nextMonthBtnContent = document.createTextNode('>');
  nextMonthBtn.append(nextMonthBtnContent);
  nextMonthBtn.addEventListener('click', () => {
    switchMonth(monthDiv, dateDiv, 'next');
  });

  // Prev Month
  const prevMonthBtn = document.createElement('button');
  const prevMonthBtnContent = document.createTextNode('<');
  prevMonthBtn.append(prevMonthBtnContent);
  prevMonthBtn.addEventListener('click', () => {
    switchMonth(monthDiv, dateDiv, 'prev');
  });

  const yearDiv = createYears(yearRange, displayDate, currentDate, dateDiv);

  dateDiv.classList.add('datepicker');
  dateDiv.append(yearDiv, prevMonthBtn, monthDiv, nextMonthBtn, weekDiv);

  const target = document.getElementById('datepicker');
  document.body.insertBefore(dateDiv, target);
};
