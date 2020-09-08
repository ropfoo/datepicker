import getDaysInMonth from '../utils/getDaysInMonth';
import { updateDate, displayDate, currentDate } from '../date';

const dayDiff = (month: number, year: number) => {
  return new Date(year, month, 1).getDay() === 0
    ? 7
    : new Date(year, month, 1).getDay();
};

const createWeek = (
  currentDate: currentDate,
  { month, year }: displayDate
): HTMLDivElement => {
  const weekDivWrapper = document.createElement('div');

  const weekDiv = document.createElement('div');
  weekDiv.classList.add('datepicker__weekday-section', 'rf-dp');

  const weekDaysDiv = document.createElement('div');
  weekDaysDiv.classList.add('datepicker__weekday-name-section', 'rf-dp');

  const weekDaysDE = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

  for (let weekDay = 0; weekDay < weekDaysDE.length; weekDay++) {
    const weekDayText = document.createElement('p');
    weekDayText.classList.add('rf-dp');
    weekDayText.innerHTML = weekDaysDE[weekDay];
    weekDaysDiv.append(weekDayText);
  }
  const diff = dayDiff(month.id, year);

  for (
    let dayCounter = 2;
    dayCounter <= getDaysInMonth(month.number, year) + diff;
    dayCounter++
  ) {
    // Day
    const dayDiv = document.createElement('div');

    const dayContentDiv = document.createElement('div');
    dayContentDiv.classList.add('datepicker__weekday-section__day');

    const dayContent = document.createTextNode((dayCounter - diff).toString());
    dayContentDiv.append(dayContent);

    dayContentDiv.addEventListener('click', () => {
      let day = parseInt(dayContentDiv.innerHTML);
      currentDate = updateDate({ day, month, year });
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
