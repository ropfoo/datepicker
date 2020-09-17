import removeSpaceFromString from './removeSpaceFromString';

const convertToArray = (value: String) => {
  return value.replace(/-/, ',');
};

const getJSONfromHTMLdata = (dataContent: String) => {
  // console.log(dataContent);
  const content = dataContent.split(',');
  const JSONContentArray: any = [];
  content.forEach((property: any) => {
    const propertyArray = property.split(':');
    const propertyName = removeSpaceFromString(`"${propertyArray[0]}"`);

    const propertyValue =
      parseInt(propertyArray[1]) || propertyArray[1].includes('-')
        ? parseInt(propertyArray[1]) && !propertyArray[1].includes('-')
          ? parseInt(propertyArray[1])
          : removeSpaceFromString(convertToArray(propertyArray[1]))
        : removeSpaceFromString(propertyArray[1]);

    // console.log(propertyName);
    property = { propertyName: propertyValue };
    JSONContentArray.push(property);
  });

  console.log(JSONContentArray);
};

export default getJSONfromHTMLdata;

// yearRange: [1930,2009] => "yearRange": [1930,2009]
