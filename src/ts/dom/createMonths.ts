import { displayDate } from '../date';
import { months } from '../utils/months';
import createWeek from './createWeek';
import { updateDate } from '../date';

const switchMonth = (
  direction: string,
  monthTitle: any,
  dateDiv: any,
  displayDate: displayDate,
  currentDate: any
) => {
  let currentMonthNum = displayDate.month.id;
  dateDiv.lastChild.remove();
  if (direction === 'next') {
    currentMonthNum++;
    currentMonthNum > 11 && (currentMonthNum = 0);
    displayDate.month = months[currentMonthNum];
    monthTitle.innerHTML = displayDate.month.nameDE;
  } else if (direction === 'prev') {
    currentMonthNum--;
    currentMonthNum < 0 && (currentMonthNum = 11);
    displayDate.month = months[currentMonthNum];
    monthTitle.innerHTML = displayDate.month.nameDE;
  }
  monthTitle.innerHTML = displayDate.month.nameDE;
  displayDate.month = months[currentMonthNum];
  dateDiv.append(createWeek(currentDate, displayDate));
  console.log(displayDate.month);
  currentDate = updateDate(displayDate);
  console.log(currentDate);
};

const createMonths = (
  displayDate: displayDate,
  dateDiv: any,
  currentDate: any
) => {
  // Month
  const monthDiv = document.createElement('div');
  const monthTitle = document.createElement('p');
  const monthContent = document.createTextNode(displayDate.month.nameDE);
  monthTitle.append(monthContent);

  // Next Month
  const nextMonthBtn = document.createElement('button');
  const nextMonthBtnContent = document.createTextNode('>');
  nextMonthBtn.append(nextMonthBtnContent);
  nextMonthBtn.addEventListener('click', () => {
    switchMonth('next', monthTitle, dateDiv, displayDate, currentDate);
  });

  // Prev Month
  const prevMonthBtn = document.createElement('button');
  const prevMonthBtnContent = document.createTextNode('<');
  prevMonthBtn.append(prevMonthBtnContent);
  prevMonthBtn.addEventListener('click', () => {
    switchMonth('prev', monthTitle, dateDiv, displayDate, currentDate);
  });
  monthDiv.append(prevMonthBtn, monthTitle, nextMonthBtn);
  return monthDiv;
};

export default createMonths;
