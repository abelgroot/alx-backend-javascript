export const weakMap = new WeakMap();

/**
 * track the usage of the endpoint using a weakMap
 * @param {Object} endpoint
 * @returns {void}
 * @throws {Error} if the endpoint is used more than 5 times
 */
export function queryAPI(endpoint) {
  if (weakMap.get(endpoint)) {
    if (weakMap.get(endpoint) === 4) throw new Error('Endpoint load is high');
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
