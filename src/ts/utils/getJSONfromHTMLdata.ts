import {
  removeSpaceFromString,
  convertStringToArrayByDash,
} from './formatting';

/**
 * Uses HTML data property string an converts it to JSON
 * @param {String} dataContent - data from html property
 *
 */
const getJSONfromHTMLdata = (dataContent: String) => {
  console.log(dataContent);
  const JSONArray = createPropertyArray(dataContent);
  const obj = JSONArray.reduce((result: any, current: any) => {
    return Object.assign(result, current);
  });
  const objJSON = JSON.stringify(obj);
  console.log(obj);

  console.log(objJSON);
  return objJSON;
};

const createPropertyArray = (dataContent: String) => {
  const JSONContentArray: any = [];
  const content = dataContent.split(',');
  content.forEach((property: any) => {
    const propertyArray = property.split(':');
    const propertyName = removeSpaceFromString(`${propertyArray[0]}`);

    const propertyValue =
      parseInt(propertyArray[1]) || propertyArray[1].includes('-')
        ? parseInt(propertyArray[1]) && !propertyArray[1].includes('-')
          ? parseInt(propertyArray[1])
          : convertStringToArrayByDash(propertyArray[1])
        : removeSpaceFromString(propertyArray[1]);

    property = {};
    property[`${propertyName}`] = propertyValue;
    console.log(property);
    JSONContentArray.push(property);
  });

  return JSONContentArray;
};

export default getJSONfromHTMLdata;

// yearRange: [1930,2009] => "yearRange": [1930,2009]
