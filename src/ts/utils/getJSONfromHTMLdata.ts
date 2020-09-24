import {
  removeSpaceFromString,
  convertStringToArrayByDash,
} from './formatting';

/**
 * Uses HTML data property string an converts it to JSON
 * @param {String} dataContent - data from html property
 * @returns {JSON} - data reformatted to JSON
 */
const getJSONfromHTMLdata = (dataContent: String) => {
  console.log(dataContent);
  const JSONArray: Object[] = createPropertyArray(dataContent);
  const obj = JSONArray.reduce((result: any, current: any) => {
    return Object.assign(result, current);
  });
  const objJSON = JSON.stringify(obj);
  console.log(obj);

  console.log(objJSON);
  return objJSON;
};

/**
 * Creates Array containing all properties as single entry
 * @param {String} dataContent
 * @returns {Array} - Array containing all properties
 */
const createPropertyArray = (dataContent: String): Object[] => {
  const JSONContentArray: Object[] = [];
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

    const propertyObject: any = {};
    propertyObject[`${propertyName}`] = propertyValue;
    console.log(property);
    JSONContentArray.push(propertyObject);
  });

  return JSONContentArray;
};

export default getJSONfromHTMLdata;
