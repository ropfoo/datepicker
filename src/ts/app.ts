import '../scss/main.scss';
import { datepicker } from './datepicker';
import getJSONfromHTMLdata from './utils/getJSONfromHTMLdata';

const dateElements = document.querySelectorAll('.dp-element');
dateElements.forEach((element: any) => {
  const target: Element | HTMLElement | HTMLInputElement | null = element;

  type options = {
    yearRange: number[];
    customTopOffset: number;
    language: string;
    format: string;
  };

  // default options
  let options: options = {
    yearRange: [new Date().getFullYear() - 110, new Date().getFullYear()],
    customTopOffset: 10,
    language: 'EN',
    format: 'd.m.yy',
  };

  // user options
  if (target instanceof HTMLElement) {
    target?.dataset.datepicker &&
      (options = JSON.parse(getJSONfromHTMLdata(target?.dataset.datepicker)));
  }

  // check if year range exists
  !options.yearRange &&
    (options.yearRange = [
      new Date().getFullYear() - 110,
      new Date().getFullYear(),
    ]);

  // create datepicker
  datepicker(
    target,
    {
      startYear: options.yearRange[0],
      endYear: options.yearRange[1],
    },
    options.customTopOffset,
    options.format,
    options.language
  );
});
