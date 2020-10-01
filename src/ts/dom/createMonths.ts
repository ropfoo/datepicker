import { displayDate, currentDate } from '../datepicker';
import { months } from '../utils/months';
import createWeek from './createWeek';
import { updateDate } from '../datepicker';

/**
 * Switches between months
 * @param {string} direction - navigation direction ('next' / 'prev')
 * @param {any} monthTitle - DOM month title element
 * @param {any} dateDiv - DOM date div
 * @param {displayDate} displayDate - object containing day, month, year
 * @param {currentDate} currentDate - object containing the current date
 */
const switchMonth = (
  target: Element | HTMLElement | HTMLInputElement | null,
  direction: string,
  monthTitle: any,
  dateDiv: any,
  displayDate: displayDate,
  currentDate: currentDate,
  language: string
) => {
  let currentMonthNum = displayDate.month.id;
  dateDiv.lastChild.remove();
  if (direction === 'next') {
    currentMonthNum++;
    currentMonthNum > 11 && (currentMonthNum = 0);
    displayDate.month = months[currentMonthNum];
    monthTitle.innerHTML = getMonthLanguage(language, displayDate);
  } else if (direction === 'prev') {
    currentMonthNum--;
    currentMonthNum < 0 && (currentMonthNum = 11);
    displayDate.month = months[currentMonthNum];
    monthTitle.innerHTML = getMonthLanguage(language, displayDate);
  }
  monthTitle.innerHTML = getMonthLanguage(language, displayDate);
  displayDate.month = months[currentMonthNum];
  dateDiv.append(createWeek(target, currentDate, displayDate, language));
  currentDate = updateDate(target, displayDate.format, displayDate);
};

/**
 * Returns month in selected languge
 * @param {string} language
 * @param {displayDate} displayDate
 * @returns {string} - month name in correct language
 */
const getMonthLanguage = (
  language: string,
  displayDate: displayDate
): string => {
  switch (language) {
    case 'EN':
      return displayDate.month.nameEN;
    case 'DE':
      return displayDate.month.nameDE;
    default:
      return displayDate.month.nameEN;
  }
};

const createMonths = (
  target: Element | HTMLElement | HTMLInputElement | null,
  displayDate: displayDate,
  dateDiv: any,
  currentDate: currentDate,
  language: string
): HTMLDivElement => {
  // Month
  const monthDiv = document.createElement('div');
  monthDiv.classList.add('datepicker__month-section', 'rf-dp');
  const monthTitle = document.createElement('p');
  monthTitle.classList.add('rf-dp');

  const monthContent = document.createTextNode(
    getMonthLanguage(language, displayDate)
  );
  monthTitle.append(monthContent);

  // Next Month
  const nextMonthBtn = document.createElement('div');
  nextMonthBtn.classList.add('rf-dp');
  const nextMonthBtnContent = document.createTextNode('>');
  nextMonthBtn.classList.add('datepicker__month-section__btn');
  nextMonthBtn.append(nextMonthBtnContent);
  nextMonthBtn.addEventListener('click', () => {
    switchMonth(
      target,
      'next',
      monthTitle,
      dateDiv,
      displayDate,
      currentDate,
      language
    );
  });

  // Prev Month
  const prevMonthBtn = document.createElement('div');
  prevMonthBtn.classList.add('rf-dp');
  const prevMonthBtnContent = document.createTextNode('<');
  prevMonthBtn.append(prevMonthBtnContent);
  prevMonthBtn.classList.add('datepicker__month-section__btn');
  prevMonthBtn.addEventListener('click', () => {
    switchMonth(
      target,
      'prev',
      monthTitle,
      dateDiv,
      displayDate,
      currentDate,
      language
    );
  });
  monthDiv.append(prevMonthBtn, monthTitle, nextMonthBtn);
  return monthDiv;
};

export default createMonths;
