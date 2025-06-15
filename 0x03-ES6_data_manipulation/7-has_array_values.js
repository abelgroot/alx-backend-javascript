/**
 * check if a set contains all of the values from an array
 * @param {Set} set - the set to check
 * @param {Array} array - the array of values to check
 * @returns {boolean} - true if the set contains all of the values from the array
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
