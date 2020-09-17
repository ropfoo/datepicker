const getJSONfromHTMLdata = (dataContent: String) => {
  //console.log(dataContent);
  const content = dataContent.split('/[,]/');

  // yearRange: [1930,2009] => "yearRange": [1930,2009]
  console.log(content);
};

export default getJSONfromHTMLdata;
