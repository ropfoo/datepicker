import { months, month } from './utils/months';
import createWeek from './dom/createWeek';
import createMonths from './dom/createMonths';
import createYears, { yearRange } from './dom/createYears';

let dateHTML: HTMLElement | HTMLInputElement | null;

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
  if (dateHTML instanceof HTMLInputElement) {
    dateHTML.value = `${day}.${month.number}.${year}`;
  } else if (dateHTML instanceof HTMLElement) {
    dateHTML.innerHTML = `${day}.${month.number}.${year}`;
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

  dateDiv.classList.add('datepicker', 'rf-dp');
  dateDiv.id = 'rf-datepicker';
  dateDiv.append(yearDiv, monthDiv, weekDiv);

  const target = document.getElementById('datepicker');

  target?.addEventListener('click', () => {
    console.log(target.offsetTop);
    dateDiv.style.display = 'inline';
    dateDiv.style.top = target.offsetTop + 25 + 'px';
  });

  document.addEventListener('click', (e) => {
    //const src = e.srcElement;
    const target: any = e.target;
    console.log(target);
    //console.log(src instanceof HTMLInputElement);
    if (target.id === 'datepicker' || target.classList.contains('rf-dp')) {
      console.log('trigger');
    } else {
      dateDiv.style.display = 'none';
    }
  });

  document.body.insertBefore(dateDiv, target);
};
