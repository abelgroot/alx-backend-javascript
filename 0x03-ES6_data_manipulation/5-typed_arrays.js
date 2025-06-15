/**
 * Create a new Int8Array with a given length, with a value at a specific position
 * @param {number} length - length of the array
 * @param {number} position - position of the value
 * @param {number} value - value to set at the position
 * @returns {Int8Array} - the new Int8Array
 * @throws {Error} if position is outside the range of the array
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
