export default function appendToEachArrayValue(array, appendString) {
  if (!Array.isArray(array)) {
    throw new Error('Input is not an array');
  }
  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }
  return newArray;
}
