// index re-export for backwards compatibility
export * as dateUtils from "./dateUtils.js";
export * as stringUtils from "./stringUtils.js";
export * as mathUtils from "./mathUtils.js";
export * as arrayUtils from "./arrayUtils.js";
export * as userUtils from "./userUtils.js";
export * as logUtils from "./logUtils.js";

// default export for quick imports
export { default as date } from "./dateUtils.js";
export { default as string } from "./stringUtils.js";
export { default as math } from "./mathUtils.js";
export { default as array } from "./arrayUtils.js";
export { default as user } from "./userUtils.js";
export { default as log } from "./logUtils.js";
// utils.js — Before Refactor (Deliberately messy code)

import moment from "moment";

/** ---------------- DATE HELPERS ---------------- **/

export function formatDate(date) {
  if (!date) return "";
  return moment(date).format("YYYY-MM-DD");
}

export function formatDateTime(date) {
  if (!date) return "";
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
}

export function formatShortDate(date) {
  if (!date) return "";
  return moment(date).format("DD/MM/YY");
}

export function getCurrentDate() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(now.getDate()).padStart(2, "0")}`;
}

export function getDayName(dateStr) {
  const date = new Date(dateStr);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
}

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
  return months[monthIndex];
}

/** ---------------- STRING HELPERS ---------------- **/

export function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeAllWords(str) {
  if (!str) return "";
  return str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function truncateText(text, length = 20) {
  if (!text) return "";
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
}

export function isValidEmail(email) {
  if (!email) return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.toLowerCase());
}

export function checkEmail(email) {
  if (!email) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** ---------------- PHONE HELPERS ---------------- **/

export function formatPhone(phone) {
  let cleaned = ("" + phone).replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `(${cleaned.substring(0, 3)}) ${cleaned.substring(
      3,
      6
    )}-${cleaned.substring(6)}`;
  }
  return phone;
}

export function normalizePhone(phone) {
  let p = phone.replaceAll("-", "").replaceAll(" ", "");
  if (p.startsWith("+91")) p = p.substring(3);
  return p.trim();
}

export function maskPhone(phone) {
  if (!phone) return "";
  const str = phone.toString();
  return str.slice(0, 2) + "******" + str.slice(-2);
}

/** ---------------- NUMBER / MATH HELPERS ---------------- **/

export function sum(a, b) {
  return Number(a) + Number(b);
}

export function total(a, b) {
  return parseInt(a) + parseInt(b);
}

export function average(nums) {
  if (!nums || nums.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}

export function calcAvg(nums) {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function percentage(part, total) {
  if (total === 0) return 0;
  return ((part / total) * 100).toFixed(2);
}

/** ---------------- ARRAY HELPERS ---------------- **/

export function removeDuplicates(arr) {
  return [...new Set(arr)];
}

export function flattenArray(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

export function chunkArray(array, size) {
  if (!Array.isArray(array)) return [];
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export function mergeArrays(a1, a2) {
  return [...a1, ...a2];
}

export function intersection(a1, a2) {
  return a1.filter((item) => a2.includes(item));
}

/** ---------------- USER HELPERS ---------------- **/

export function getUserFullName(user) {
  return user?.firstName + " " + user?.lastName;
}

export function getDisplayName(user) {
  return user ? `${user.firstName} ${user.lastName}` : "";
}

export function isUserActive(user) {
  return user?.status === "active" || user?.isActive === true;
}

export function getUserInitials(user) {
  if (!user?.firstName || !user?.lastName) return "";
  return user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase();
}

export function getRandomUser(users) {
  if (!users || users.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
}

/** ---------------- LOGGING & DEBUGGING ---------------- **/

export function logInfo(message) {
  console.log("[INFO]", new Date().toISOString(), message);
}

export function logError(error) {
  console.error("[ERROR]", new Date().toISOString(), error);
}

export function logWarn(message) {
  console.warn("[WARN]", new Date().toISOString(), message);
}

export function debugObject(obj) {
  console.log(JSON.stringify(obj, null, 2));
}

/** ---------------- RANDOM EXTRA FUNCTIONS ---------------- **/

export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

export function randomString(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
