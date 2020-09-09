import { months, month } from './utils/months';
import toggleVisibility from './utils/toggleVisibility';
import createWeek from './dom/createWeek';
import createMonths from './dom/createMonths';
import createYears, { yearRange } from './dom/createYears';

let dateHTML: HTMLElement | HTMLInputElement | null;

export interface currentDate {
  date: Date;
}
let currentDate: currentDate;

export type displayDate = {
  day: number;
  month: month;
  year: number;
};

let displayDate: displayDate;

export const date = (
  dateDiv: HTMLElement | HTMLInputElement | null,
  yearRange: yearRange,
  customTopOffset: number
) => {
  dateHTML = dateDiv;
  dateHTML instanceof HTMLInputElement && (dateHTML.autocomplete = 'off');
  const today = new Date();
  const initDatepickerDay = new Date(yearRange.endYear, today.getMonth(), 1);
  displayDate = {
    day: 1,
    month: months[initDatepickerDay.getMonth()],
    year: initDatepickerDay.getFullYear(),
  };

  generateDateDiv(yearRange, customTopOffset);
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

const generateDateDiv = (yearRange: yearRange, customTopOffset: number) => {
  const dateDiv = document.createElement('div');

  const weekDiv = createWeek(currentDate, displayDate);
  const monthDiv = createMonths(displayDate, dateDiv, currentDate);
  const yearDiv = createYears(yearRange, displayDate, currentDate, dateDiv);

  dateDiv.classList.add('datepicker', 'rf-dp');
  dateDiv.id = 'rf-datepicker';
  dateDiv.append(yearDiv, monthDiv, weekDiv);

  const target: HTMLElement | null = document.getElementById('datepicker');

  target?.addEventListener('click', () => {
    toggleVisibility(dateDiv, true, 10);
    dateDiv.style.top = target.offsetTop + customTopOffset + 'px';
    dateDiv.style.left = target.offsetLeft + 'px';
  });

  document.addEventListener('click', (e) => {
    const target: any = e.target;
    !(target.id === 'datepicker' || target.classList.contains('rf-dp')) &&
      toggleVisibility(dateDiv, false, 300);
  });

  //document.body.insertBefore(dateDiv, target);
  //document.body.appendChild(dateDiv);
  const targetParent = target?.parentElement;
  targetParent?.appendChild(dateDiv);
  //document.body.appendChild(dateDiv);
};
