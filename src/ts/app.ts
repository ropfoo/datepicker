import '../scss/main.scss';
import { date } from './date';

const dateDiv: HTMLElement | HTMLInputElement | null = document.getElementById(
  'datepicker'
);

let options = {
  customTopOffset: 50,
  yearRange: [1930, 2020],
};

dateDiv?.dataset.datepicker &&
  (options = JSON.parse(dateDiv?.dataset.datepicker));

date(
  dateDiv,
  {
    startYear: options.yearRange[0],
    endYear: options.yearRange[1],
  },
  options.customTopOffset
);
