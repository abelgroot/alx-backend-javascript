/**
 * updates the value of an element that has a quantity of 1 to 100
 * @param {Map} map
 * @returns {Map}
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const [key, value] of map) {
    if (value === 1) map.set(key, 100);
  }
  return map;
}
