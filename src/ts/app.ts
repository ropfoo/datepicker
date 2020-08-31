import '../scss/main.scss';
import { date } from './date';

const dateDiv: HTMLElement | HTMLInputElement | null = document.getElementById(
  'datepicker'
);
date(dateDiv, { startYear: 1930, endYear: 2020 });
