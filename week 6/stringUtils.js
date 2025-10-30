/**
 * stringUtils.js
 * Pure helpers for strings: capitalization, email validation, slug.
 */

/**
 * Capitalize the first letter of a string.
 * @param {string} str
 * @returns {string}
 */
export function capitalizeFirstLetter(str) {
  if (!str) return "";
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

/**
 * Capitalize each word in a string.
 * @param {string} str
 * @returns {string}
 */
export function capitalizeAllWords(str) {
  if (!str) return "";
  return String(str)
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : ""))
    .join(" ");
}

/**
 * Truncate text safely
 * @param {string} text
 * @param {number} [length=20]
 * @returns {string}
 */
export function truncateText(text, length = 20) {
  if (!text) return "";
  const s = String(text);
  if (s.length <= length) return s;
  return s.substring(0, length) + "...";
}

/**
 * Validate basic email shape (not exhaustive) - deterministic, pure
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  if (!email) return false;
  const e = String(email).toLowerCase();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(e);
}

/**
 * Slugify a string into url-friendly kebab-case
 * @param {string} str
 * @returns {string}
 */
export function slugify(str) {
  if (!str) return "";
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default {
  capitalizeFirstLetter,
  capitalizeAllWords,
  truncateText,
  isValidEmail,
  slugify,
};
