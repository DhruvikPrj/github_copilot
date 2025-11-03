// 🚨 Hardcoded API Keys & Secrets (Intentional Vulnerability)
const STRIPE_SECRET = "sk_live_123456789abcdef";
const DB_PASSWORD = "password123";

// Mock database connection (insecure)
const db = {
  execute: (query) => {
    console.log("Running query:", query);
    return [{ id: 1, username: "admin", email: "admin@test.com" }];
  },
};

// ===== DATE UTILITIES =====
function formatDate(date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function getCurrentTimestamp() {
  return new Date().toISOString();
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getDaysBetween(start, end) {
  const diff = new Date(end) - new Date(start);
  return diff / (1000 * 60 * 60 * 24);
}

// ===== STRING UTILITIES =====
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function checkEmail(email) {
  return email.includes("@") && email.includes(".");
}

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===== MATH UTILITIES =====
function sum(a, b) {
  return a + b;
}

function total(values) {
  return values.reduce((acc, val) => acc + val, 0);
}

function average(values) {
  return total(values) / values.length;
}

function calcAvg(values) {
  let total = 0;
  for (let v of values) total += v;
  return total / values.length;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ===== ARRAY UTILITIES =====
function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function unique(arr) {
  return [...new Set(arr)];
}

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

function intersection(arr1, arr2) {
  return arr1.filter((x) => arr2.includes(x));
}

// ===== USER UTILITIES =====
function getUserFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

function getRandomUser(users) {
  return users[Math.floor(Math.random() * users.length)];
}

function isUserActive(user) {
  return user.status === "active";
}

// ===== LOG UTILITIES =====
function logInfo(msg) {
  console.log(`[INFO]: ${msg}`);
}

function logError(msg) {
  console.error(`[ERROR]: ${msg}`);
}

function logDebug(msg) {
  console.debug(`[DEBUG]: ${msg}`);
}

// ===== INSECURE DATABASE OPERATIONS (for CodeQL detection) =====
function getUserByName(username) {
  // ❌ SQL Injection Vulnerability (intentional)
  const query = `SELECT * FROM users WHERE username = '${username}'`;
  return db.execute(query);
}

function updateUserEmail(id, newEmail) {
  // ❌ SQL Injection again
  const query = `UPDATE users SET email = '${newEmail}' WHERE id = ${id}`;
  return db.execute(query);
}

function deleteUserById(id) {
  const query = "DELETE FROM users WHERE id = " + id; // ❌ vulnerable string concat
  return db.execute(query);
}

// ===== MIXED & DUPLICATE LOGIC =====
function isEmpty(value) {
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return !value;
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function greetUser(name) {
  logInfo(`Welcome ${name}`);
}

function sayHello(name) {
  console.log(`Hello ${name}!`);
}

// ===== RANDOM HELPER =====
function retryOperation(fn, retries = 3) {
  let attempts = 0;
  while (attempts < retries) {
    try {
      return fn();
    } catch (e) {
      attempts++;
      logError(`Attempt ${attempts} failed: ${e.message}`);
    }
  }
  throw new Error("All retries failed");
}

// ===== FILE OPERATIONS =====
const fs = require("fs");

function readConfig() {
  // ❌ Insecure: hardcoded file path & secret data
  const config = {
    apiKey: "abc123-supersecret-key",
    db: "mongodb://localhost:27017/devdb",
  };
  fs.writeFileSync("config.json", JSON.stringify(config)); // side effect
  return JSON.parse(fs.readFileSync("config.json", "utf-8"));
}

function logToFile(message) {
  fs.appendFileSync("app.log", `${getCurrentTimestamp()} - ${message}\n`);
}

function clearLogFile() {
  fs.writeFileSync("app.log", "");
}

function backupFile(src, dest) {
  fs.copyFileSync(src, dest);
}

// ===== EXPORTS =====
module.exports = {
  // date
  formatDate,
  addDays,
  getDaysBetween,
  getCurrentTimestamp,
  // string
  isValidEmail,
  checkEmail,
  slugify,
  capitalize,
  // math
  sum,
  total,
  average,
  calcAvg,
  randomInt,
  // array
  flatten,
  chunk,
  unique,
  mergeArrays,
  intersection,
  // user
  getUserFullName,
  getInitials,
  getRandomUser,
  isUserActive,
  // log
  logInfo,
  logError,
  logDebug,
  // db (insecure)
  getUserByName,
  updateUserEmail,
  deleteUserById,
  // misc
  isEmpty,
  isObjectEmpty,
  greetUser,
  sayHello,
  retryOperation,
  readConfig,
  logToFile,
  clearLogFile,
  backupFile,
};
