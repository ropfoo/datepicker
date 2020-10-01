import getDaysInMonth from '../utils/getDaysInMonth';
import { updateDate, displayDate, currentDate } from '../datepicker';
import { weekDaysDE, weekDaysEN } from '../utils/weekdays';

/**
 * return number of day
 * if day is sunday (0): return 7 instead
 * else: return number of the day
 * @param {number} month
 * @param {number} year
 */
const dayDiff = (month: number, year: number): number => {
  return new Date(year, month, 1).getDay() === 0
    ? 7
    : new Date(year, month, 1).getDay();
};

/**
 * Adds the weekday grid div to the calendar
 * @param {currentDate} currentDate - currently active date
 * @param {displayDate} displayDate
 * @param {string} language - selected language
 * @returns {HTMLDivElement} - weekday section div
 */
const createWeek = (
  target: Element | HTMLElement | HTMLInputElement | null,
  currentDate: currentDate,
  displayDate: displayDate,
  language: string
): HTMLDivElement => {
  const weekDivWrapper = document.createElement('div');

  const weekDiv = document.createElement('div');
  weekDiv.classList.add('datepicker__weekday-section', 'rf-dp');

  const weekDaysDiv = document.createElement('div');
  weekDaysDiv.classList.add('datepicker__weekday-name-section', 'rf-dp');

  for (let weekDay = 0; weekDay < 7; weekDay++) {
    const weekDayText = document.createElement('p');
    weekDayText.classList.add('rf-dp');
    switch (language) {
      case 'EN':
        weekDayText.innerHTML = weekDaysEN[weekDay];
        break;
      case 'DE':
        weekDayText.innerHTML = weekDaysDE[weekDay];
        break;
      default:
        weekDayText.innerHTML = weekDaysEN[weekDay];
    }
    weekDaysDiv.append(weekDayText);
  }
  const diff = dayDiff(displayDate.month.id, displayDate.year);

  for (
    let dayCounter = 2;
    dayCounter <=
    getDaysInMonth(displayDate.month.number, displayDate.year) + diff;
    dayCounter++
  ) {
    // Day
    const dayDiv = document.createElement('div');

    const dayContentDiv = document.createElement('div');
    dayContentDiv.classList.add('datepicker__weekday-section__day');

    const dayContent = document.createTextNode((dayCounter - diff).toString());
    dayContentDiv.append(dayContent);

    dayContentDiv.addEventListener('click', () => {
      displayDate.day = parseInt(dayContentDiv.innerHTML);
      currentDate = updateDate(target, displayDate.format, displayDate);
    });

    if (dayCounter <= diff) {
      dayDiv.append(document.createElement('div'));
      dayDiv.classList.add('rf-dp');
    } else {
      dayDiv.append(dayContentDiv);
    }
    weekDiv.append(dayDiv);
  }

  weekDivWrapper.append(weekDaysDiv, weekDiv);

  return weekDivWrapper;
};

export default createWeek;
