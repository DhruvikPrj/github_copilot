/**
 * arrayUtils.js
 * Pure array helpers: flatten, chunk, unique, merge, intersection
 */

/**
 * Flatten one level deep array-of-arrays
 * @param {Array} arr
 * @returns {Array}
 */
export function flatten(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.reduce((acc, val) => acc.concat(val), []);
}

/**
 * Chunk an array into arrays of given size
 * @param {Array} array
 * @param {number} size
 * @returns {Array[]}
 */
export function chunk(array, size) {
  if (!Array.isArray(array) || size <= 0) return [];
  const result = [];
  for (let i = 0; i < array.length; i += size) result.push(array.slice(i, i + size));
  return result;
}

/**
 * Unique values from array
 * @param {Array} arr
 * @returns {Array}
 */
export function unique(arr) {
  if (!Array.isArray(arr)) return [];
  return Array.from(new Set(arr));
}

/**
 * Merge arrays (concatenate) and dedupe optionally
 * @param {Array} a
 * @param {Array} b
 * @param {boolean} [dedupe=false]
 * @returns {Array}
 */
export function merge(a = [], b = [], dedupe = false) {
  const merged = [...a, ...b];
  return dedupe ? unique(merged) : merged;
}

/**
 * Intersection of two arrays
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */
export function intersection(a = [], b = []) {
  if (!Array.isArray(a) || !Array.isArray(b)) return [];
  return a.filter((item) => b.includes(item));
}

export default { flatten, chunk, unique, merge, intersection };
