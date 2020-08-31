import getDaysInMonth from '../utils/getDaysInMonth';
import { updateDate, displayDate } from '../date';

const createWeek = (currentDate: any, { month, year }: displayDate) => {
  const weekDiv = document.createElement('div');
  weekDiv.classList.add('datepicker__week-section');

  for (
    let dayCounter = 1;
    dayCounter <= getDaysInMonth(month.number, year);
    dayCounter++
  ) {
    // Day
    const dayDiv = document.createElement('div');
    const dayContent = document.createTextNode(dayCounter.toString());
    dayDiv.addEventListener('click', () => {
      //day = parseInt(dayDiv.innerHTML);
      let day = parseInt(dayDiv.innerHTML);
      currentDate = updateDate({ day, month, year });
      console.log(currentDate);
    });
    dayDiv.append(dayContent);
    weekDiv.append(dayDiv);
  }

  return weekDiv;
};

export default createWeek;
