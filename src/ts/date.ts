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
  format: String;
};

let displayDate: displayDate;

/**
 *
 * @param dateDiv
 * @param yearRange
 * @param customTopOffset
 */
export const date = (
  dateDiv: HTMLElement | HTMLInputElement | null,
  yearRange: yearRange,
  customTopOffset: number,
  format: String,
  language: String
) => {
  dateHTML = dateDiv;
  dateHTML instanceof HTMLInputElement && (dateHTML.autocomplete = 'off');
  const today = new Date();
  const initDatepickerDay = new Date(yearRange.endYear, today.getMonth(), 1);
  displayDate = {
    day: 1,
    month: months[initDatepickerDay.getMonth()],
    year: initDatepickerDay.getFullYear(),
    format: format,
  };

  generateDateDiv(yearRange, customTopOffset, language);
};

export const updateDate = (format: String, displayDate: displayDate) => {
  if (dateHTML instanceof HTMLInputElement) {
    console.log(formatDate(format, displayDate));

    dateHTML.value = formatDate(format, displayDate);
  } else if (dateHTML instanceof HTMLElement) {
    dateHTML.innerHTML = `${displayDate.day}.${displayDate.month.number}.${displayDate.year}`;
  }
  return {
    date: new Date(displayDate.year, displayDate.month.id, displayDate.day),
  };
};

const formatDate = (
  format: String,
  { day, month, year }: displayDate
): string => {
  switch (format) {
    case 'dd.mm.yy':
      return `${day}.${month.number}.${year}`;
    case 'yy.mm.dd':
      return `${year}.${month.number}.${day}`;
    default:
      return `${day}.${month.number}.${year}`;
  }
};

const generateDateDiv = (
  yearRange: yearRange,
  customTopOffset: number,
  language: String
) => {
  const dateDiv = document.createElement('div');

  const weekDiv = createWeek(currentDate, displayDate, language);
  const monthDiv = createMonths(displayDate, dateDiv, currentDate, language);
  const yearDiv = createYears(
    yearRange,
    displayDate,
    currentDate,
    dateDiv,
    language
  );

  dateDiv.classList.add('datepicker', 'rf-dp');
  dateDiv.id = 'rf-datepicker';
  dateDiv.append(yearDiv, monthDiv, weekDiv);

  const target: HTMLElement | null = document.getElementById('datepicker');

  target?.addEventListener('click', () => {
    toggleVisibility(dateDiv, true, 50);
    dateDiv.style.top = target.offsetTop + customTopOffset + 'px';
    dateDiv.style.left = target.offsetLeft + 'px';
  });

  document.addEventListener('click', (e) => {
    const target: any = e.target;
    !(target.id === 'datepicker' || target.classList.contains('rf-dp')) &&
      toggleVisibility(dateDiv, false, 50);
  });

  const targetParent = target?.parentElement;
  targetParent?.appendChild(dateDiv);
};
