export const removeSpaceFromString = (value: string) => {
  return value.replace(/\s/g, '');
};

/**
 *
 * @param value
 */
export const convertStringToArrayByDash = (value: String) => {
  const dataArray: any = value.toString().split('-');
  const formattedDataArray = dataArray.map((element: String) =>
    removeSpaceFromString(element.toString())
  );
  return formattedDataArray;
};
