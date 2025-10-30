/**
 * mathUtils.js
 * Pure numeric helpers: sum, average, percentage, randomInt, randomString generator
 */

/**
 * Sum two numbers coercively but safely.
 * @param {number|string} a
 * @param {number|string} b
 * @returns {number}
 */
export function sum(a, b) {
  return Number(a || 0) + Number(b || 0);
}

/**
 * Average of array of numbers; returns 0 for empty input
 * @param {number[]} nums
 * @returns {number}
 */
export function average(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return 0;
  const total = nums.reduce((acc, n) => acc + Number(n || 0), 0);
  return total / nums.length;
}

/**
 * Percentage with 2 decimal precision as number
 * @param {number} part
 * @param {number} total
 * @returns {number}
 */
export function percentage(part, total) {
  const t = Number(total || 0);
  if (t === 0) return 0;
  return Number(((Number(part || 0) / t) * 100).toFixed(2));
}

/**
 * Random integer in [min, max]
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function randomInt(min, max) {
  const mi = Math.ceil(min);
  const ma = Math.floor(max);
  return Math.floor(Math.random() * (ma - mi + 1)) + mi;
}

/**
 * Generate a random alpha-numeric string
 * @param {number} length
 * @returns {string}
 */
export function randomString(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let out = "";
  for (let i = 0; i < length; i++) out += chars.charAt(Math.floor(Math.random() * chars.length));
  return out;
}

export default { sum, average, percentage, randomInt, randomString };
