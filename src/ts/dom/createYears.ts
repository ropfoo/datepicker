import createWeek from './createWeek';
import { displayDate, updateDate } from '../date';

export type yearRange = {
  startYear: number;
  endYear: number;
};

const createYears = (
  yearRange: yearRange,
  displayDate: displayDate,
  currentDate: any,
  dateDiv: any
) => {
  // Year
  const yearDiv = document.createElement('div');
  const yearDropdown = document.createElement('select');
  for (
    let selectedYear = yearRange.startYear;
    selectedYear <= yearRange.endYear;
    selectedYear++
  ) {
    const yearOption = document.createElement('option');
    yearOption.value = selectedYear.toString();
    yearOption.innerHTML = selectedYear.toString();
    yearDropdown.append(yearOption);
  }
  yearDropdown.value = yearRange.endYear.toString();
  yearDropdown.addEventListener('change', (e) => {
    dateDiv.lastChild.remove();
    const element = e.currentTarget as HTMLInputElement;
    displayDate.year = parseInt(element.value);
    dateDiv.append(createWeek(currentDate, displayDate));
    currentDate = updateDate(displayDate);
    console.log(currentDate);
  });
  yearDiv.append(yearDropdown);

  return yearDiv;
};

export default createYears;
