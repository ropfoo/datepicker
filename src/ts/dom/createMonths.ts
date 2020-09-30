import { displayDate, currentDate } from '../date';
import { months } from '../utils/months';
import createWeek from './createWeek';
import { updateDate } from '../date';

/**
 * Switches between months
 * @param {string} direction - navigation direction ('next' / 'prev')
 * @param {any} monthTitle - DOM month title element
 * @param {any} dateDiv - DOM date div
 * @param {displayDate} displayDate - object containing day, month, year
 * @param {currentDate} currentDate - object containing the current date
 */
const switchMonth = (
  direction: string,
  monthTitle: any,
  dateDiv: any,
  displayDate: displayDate,
  currentDate: currentDate,
  language: String
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
  dateDiv.append(createWeek(currentDate, displayDate, language));
  currentDate = updateDate(displayDate.format, displayDate);
};

/**
 * Returns month in selected languge
 * @param {String} language
 * @param {displayDate} displayDate
 */
const getMonthLanguage = (language: String, displayDate: displayDate) => {
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
  displayDate: displayDate,
  dateDiv: any,
  currentDate: currentDate,
  language: String
): HTMLDivElement => {
  // Month
  const monthDiv = document.createElement('div');
  monthDiv.classList.add('datepicker__month-section', 'rf-dp');
  const monthTitle = document.createElement('p');
  monthTitle.classList.add('rf-dp');

  const monthContent = document.createTextNode(displayDate.month.nameDE);
  monthTitle.append(monthContent);

  // Next Month
  const nextMonthBtn = document.createElement('div');
  nextMonthBtn.classList.add('rf-dp');
  const nextMonthBtnContent = document.createTextNode('>');
  nextMonthBtn.classList.add('datepicker__month-section__btn');
  nextMonthBtn.append(nextMonthBtnContent);
  nextMonthBtn.addEventListener('click', () => {
    switchMonth(
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
