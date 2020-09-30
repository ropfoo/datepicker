# 📅 datepicker
<p align="center"><a href="/dist"><img width="200" src="/demo/sample01.png" alt="sample image 01"></a></p>

## Upcoming Features

- Themes

## Simple Usage

- import the datepicker.js file from [/dist](/dist) folder
- assign the id *datepicker* to the element you want to use it on

```html
<input id="datepicker" />
```

### Options

To configure the datepicker, add the HTML parameter *data-datepicker*

```html
<input id="datepicker" data-datepicker='yearRange: 1930-2020, format: dd.mm.yy' /> 
```

| Attribute        | Description           | Example  |
| ------------- |-------------| -----|
| **yearRange**      | the range of years the user can select from | *yearRange: 2000-2005* |
| **language**      | language of the datepicker. Currently supporting: *EN*, *DE*      |   *language: EN* |
| **customTopOffset**| to add some offset to the input field     |    *customTopOffset: 30* |
| **format**| format of the date. Currently supporting: *dd.mm.yy*, *yy.mm.dd*      |    *format: dd.mm.yy* |



More features coming soon!

## Advanced Usage

You are free to customize the source code.
To do run it on webpacks live server use:
```bash
npm start
```
To build the *datepicker.js* file in [/dist](/dist) use :
```bash
npm run build
```
