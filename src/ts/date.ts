import { months, month } from './utils/months';
import createWeek from './dom/createWeek';
import createMonths from './dom/createMonths';
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

  generateDateDiv(yearRange);
};

export const updateDate = ({ day, month, year }: displayDate) => {
  if (dateHTML) {
    dateHTML.value = `${day}.${month.number}.${year}`;
  }
  return {
    date: new Date(year, month.id, day),
  };
};

const generateDateDiv = (yearRange: yearRange) => {
  const dateDiv = document.createElement('div');
  const weekDiv = createWeek(currentDate, displayDate);

  const monthDiv = createMonths(displayDate, dateDiv, currentDate);

  const yearDiv = createYears(yearRange, displayDate, currentDate, dateDiv);

  dateDiv.classList.add('datepicker');
  dateDiv.append(yearDiv, monthDiv, weekDiv);

  const target = document.getElementById('datepicker');
  document.body.insertBefore(dateDiv, target);
};
