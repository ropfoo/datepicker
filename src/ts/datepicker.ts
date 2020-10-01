import { months, month } from './utils/months';
import toggleVisibility from './utils/toggleVisibility';
import createWeek from './dom/createWeek';
import createMonths from './dom/createMonths';
import createYears, { yearRange } from './dom/createYears';
import { formatDate } from './utils/formatting';

export interface currentDate {
  date: Date;
}
let currentDate: currentDate;

export type displayDate = {
  day: number;
  month: month;
  year: number;
  format: string;
};

let displayDate: displayDate;

/**
 *
 * @param dateDiv
 * @param yearRange
 * @param customTopOffset
 */
export const datepicker = (
  target: Element | HTMLElement | HTMLInputElement | null,
  yearRange: yearRange,
  customTopOffset: number,
  format: string,
  language: string
) => {
  target instanceof HTMLInputElement && (target.autocomplete = 'off');
  const today = new Date();
  const initDatepickerDay = new Date(yearRange.endYear, today.getMonth(), 1);
  displayDate = {
    day: 1,
    month: months[initDatepickerDay.getMonth()],
    year: initDatepickerDay.getFullYear(),
    format: format,
  };

  generateDatepickerDiv(target, yearRange, customTopOffset, language);
};

export const updateDate = (
  target: Element | HTMLElement | HTMLInputElement | null,
  format: string,
  displayDate: displayDate
) => {
  if (target instanceof HTMLInputElement) {
    target.value = formatDate(
      format,
      displayDate.day,
      displayDate.month.number,
      displayDate.year
    );
  } else if (target instanceof HTMLElement) {
    target.innerHTML = `${displayDate.day}.${displayDate.month.number}.${displayDate.year}`;
  }
  return {
    date: new Date(displayDate.year, displayDate.month.id, displayDate.day),
  };
};

const generateDatepickerDiv = (
  target: Element | HTMLElement | HTMLInputElement | null,
  yearRange: yearRange,
  customTopOffset: number = 25,
  language: string
) => {
  const datepickerDiv = document.createElement('div');
  const weekDiv = createWeek(target, currentDate, displayDate, language);
  const monthDiv = createMonths(
    target,
    displayDate,
    datepickerDiv,
    currentDate,
    language
  );
  const yearDiv = createYears(
    target,
    yearRange,
    displayDate,
    currentDate,
    datepickerDiv,
    language
  );
  datepickerDiv.classList.add('datepicker', 'rf-dp');

  datepickerDiv.append(yearDiv, monthDiv, weekDiv);

  if (target instanceof HTMLElement) {
    target?.addEventListener('click', () => {
      toggleVisibility(datepickerDiv, true, 50);
      datepickerDiv.style.top = target.offsetTop + customTopOffset + 'px';
      datepickerDiv.style.left = target.offsetLeft + 'px';
    });
  }

  document.addEventListener('click', (e) => {
    const domTarget: any = e.target;
    !(
      domTarget.classList.contains('dp-element') ||
      domTarget.classList.contains('rf-dp')
    ) && toggleVisibility(datepickerDiv, false, 50);
  });

  const targetParent = target?.parentElement;
  targetParent?.appendChild(datepickerDiv);
};
