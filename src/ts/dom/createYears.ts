import createWeek from './createWeek';
import { displayDate, updateDate, currentDate } from '../date';

export type yearRange = {
  startYear: number;
  endYear: number;
};

const createYears = (
  yearRange: yearRange,
  displayDate: displayDate,
  currentDate: currentDate,
  dateDiv: HTMLElement | HTMLInputElement | null
) => {
  // Year
  const yearDiv = document.createElement('div');
  yearDiv.classList.add('datepicker__year-section', 'rf-dp');
  const yearDropdown = document.createElement('select');
  yearDropdown.classList.add('rf-dp');

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
    if (dateDiv) {
      dateDiv.lastChild && dateDiv.lastChild.remove();
      const element = e.currentTarget as HTMLInputElement;
      displayDate.year = parseInt(element.value);
      dateDiv.append(createWeek(currentDate, displayDate));
      currentDate = updateDate(displayDate);
      Array.from(yearDropdown.children).forEach((option) => {
        option.classList.add('rf-dp');
      });
    }
  });
  yearDiv.append(yearDropdown);
  return yearDiv;
};

export default createYears;
