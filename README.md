# 📅 datepicker

<p align="center"><a href="/dist"><img width="200" src="/demo/sample01.png" alt="sample image 01"></a></p>

## Upcoming Features

- Themes

## Simple Usage

- import the datepicker.js file from [/dist](/dist) folder
- assign the id _datepicker_ to the element you want to use it on

```html
<input id="datepicker" />
```

### Options

To configure the datepicker, add the HTML parameter _data-datepicker_

```html
<input
  id="datepicker"
  data-datepicker="yearRange: 1930-2020, format: dd.mm.yy"
/>
```

| Attribute           | Description                                                      | Example                |
| ------------------- | ---------------------------------------------------------------- | ---------------------- |
| **yearRange**       | the range of years the user can select from                      | _yearRange: 2000-2005_ |
| **language**        | language of the datepicker. Currently supporting: _EN_, _DE_     | _language: EN_         |
| **customTopOffset** | to add some offset to the input field                            | _customTopOffset: 30_  |
| **format**          | format of the date. Currently supporting: _dd.mm.yy_, _yy.mm.dd_ | _format: dd.mm.yy_     |

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
