import '../scss/main.scss';
import { date } from './date';
const dateDiv = document.getElementById('datepicker');

const today = new Date();
date(today.getMonth(), today.getFullYear(), { startYear: 1930, endYear: 2020 });
