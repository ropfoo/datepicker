import getDaysInMonth from '../utils/getDaysInMonth';
import { updateDate, displayDate } from '../date';

const dayDiff = (month: number, year: number) => {
  return new Date(year, month, 1).getDay();
};

const createWeek = (currentDate: any, { month, year }: displayDate) => {
  const weekDivWrapper = document.createElement('div');

  const weekDiv = document.createElement('div');
  weekDiv.classList.add('datepicker__weekday-section');

  const weekDaysDiv = document.createElement('div');
  weekDaysDiv.classList.add('datepicker__weekday-name-section');

  const weekDaysDE = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

  for (let weekDay = 0; weekDay < weekDaysDE.length; weekDay++) {
    const weekDayText = document.createElement('p');
    weekDayText.innerHTML = weekDaysDE[weekDay];
    weekDaysDiv.append(weekDayText);
  }

  const diff = dayDiff(month.id, year) - 1;
  console.log(diff);

  for (
    let dayCounter = 1;
    dayCounter <= getDaysInMonth(month.number, year) + diff;
    dayCounter++
  ) {
    // Day
    const dayDiv = document.createElement('div');
    const dayContent = document.createTextNode((dayCounter - diff).toString());

    dayDiv.addEventListener('click', () => {
      //day = parseInt(dayDiv.innerHTML);
      let day = parseInt(dayDiv.innerHTML);

      currentDate = updateDate({ day, month, year });
      console.log(currentDate);
    });

    console.log(diff);

    if (dayCounter <= diff) {
      dayDiv.append(document.createElement('div'));
    } else {
      dayDiv.append(dayContent);
    }
    weekDiv.append(dayDiv);
  }

  weekDivWrapper.append(weekDaysDiv, weekDiv);

  return weekDivWrapper;
};

export default createWeek;
