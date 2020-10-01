# 📅 datepicker

<p align="center"><a href="/dist"><img width="200" src="/demo/sample01.png" alt="sample image 01"></a></p>

## Upcoming Features

- Themes

## Simple Usage

- import the datepicker.js file from [/dist](/dist) folder
- add the class _datepicker_ on all the elements you want to use it on

```html
<input class="dp-element" />
```

### Options

To configure the datepicker, add the HTML parameter _data-datepicker_

```html
<input
  class="dp-element"
  data-datepicker="yearRange: 1930-2020, format: dd.mm.yy"
/>
```

| Attribute           | Description                                 | Example                |
| ------------------- | ------------------------------------------- | ---------------------- |
| **yearRange**       | the range of years the user can select from | _yearRange: 2000-2005_ |
| **language**        | language of the datepicker (_EN_, _DE_)     | _language: EN_         |
| **customTopOffset** | to add some offset to the input field       | _customTopOffset: 30_  |
| **format**          | format of the date                          | _format: dd.mm.yy_     |

#### Formatting

|           | Format | Output                |
| --------: | :----: | --------------------- |
|   **Day** |   d    | 1,2,3...10,11,12      |
|           |   dd   | 01,02,03...10,11,12   |
| **Month** |   m    | 1,2,3...10,11,12      |
|           |   m    | 01,02,03...10,11,12   |
|  **Year** |   yy   | 1992,1993...2019,2020 |

More features coming soon!

## Advanced Usage

You are free to customize the source code.
To do run it on webpacks live server use:

```bash
npm start
```

To build the _datepicker.js_ file in [/dist](/dist) use :

```bash
npm run build
```
