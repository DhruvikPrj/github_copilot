/**
 * dateUtils.js
 * Small, pure date/time helpers.
 * Uses built-in Date and ISO formatting to avoid external deps.
 */

/**
 * Format a Date (or date-string) as YYYY-MM-DD
 * @param {Date|string|number} date
 * @returns {string}
 */
export function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

/**
 * Format date/time as YYYY-MM-DD HH:mm:ss (24h)
 * @param {Date|string|number} date
 * @returns {string}
 */
export function formatDateTime(date) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  const datePart = formatDate(d);
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  return `${datePart} ${hh}:${mm}:${ss}`;
}

/**
 * Short date e.g. DD/MM/YY
 * @param {Date|string|number} date
 * @returns {string}
 */
export function formatShortDate(date) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return `${dd}/${mm}/${yy}`;
}

/**
 * Return current date as YYYY-MM-DD
 * @returns {string}
 */
export function getCurrentDate() {
  return formatDate(new Date());
}

/**
 * Get day name from date
 * @param {Date|string|number} date
 * @returns {string}
 */
export function getDayName(date) {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][d.getDay()];
}

/**
 * Get month name by index 0-11
 * @param {number} monthIndex
 * @returns {string}
 */
export function getMonthName(monthIndex) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthIndex] || "";
}

export default {
  formatDate,
  formatDateTime,
  formatShortDate,
  getCurrentDate,
  getDayName,
  getMonthName,
};
