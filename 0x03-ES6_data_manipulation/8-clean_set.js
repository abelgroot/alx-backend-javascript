/**
 * return a string of all elements of the set starting with startString
 * separated by -
 * @param {Set} set
 * @param {String} startString
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  if (!set
    || !startString
    || !(set instanceof Set)
    || typeof startString !== 'string'
    || startString === ''
  ) {
    return '';
  }
  let filtered = [...set].filter(
    (value) => typeof value === 'string' && value.startsWith(startString),
  );
  filtered = filtered.map((value) => value.replace(startString, ''));
  return filtered.join('-');
}
