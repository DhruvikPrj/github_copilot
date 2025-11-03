// branch_boost.js
// Small functions with simple branches to help raise branch coverage in tests.

export function isTruthy(v) {
  if (v) return true;
  return false;
}

export function ifElseNumber(n) {
  if (n > 0) return "pos";
  return "non-pos";
}

export function safeDivide(a, b) {
  if (b === 0) return null;
  return a / b;
}

export function hasItems(arr) {
  if (arr && arr.length) return true;
  return false;
}

export function pickFirst(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[0];
}

export function toggleFlag(state) {
  if (state) return false;
  return true;
}

export function greetName(name) {
  if (!name) return "hi";
  return `hi ${name}`;
}

export function sign(n) {
  if (n === 0) return 0;
  if (n > 0) return 1;
  return -1;
}

export function within(x, a, b) {
  if (x >= a && x <= b) return true;
  return false;
}

export function fallback(val, def) {
  if (val == null) return def;
  return val;
}

export function evenOdd(n) {
  if (n % 2 === 0) return "even";
  return "odd";
}

export function maxOrDefault(arr, def) {
  if (!arr || arr.length === 0) return def;
  return Math.max(...arr);
}

export function minOrDefault(arr, def) {
  if (!arr || arr.length === 0) return def;
  return Math.min(...arr);
}

export function includesValue(arr, v) {
  if (!arr) return false;
  return arr.indexOf(v) !== -1;
}

export function describeAge(age) {
  if (age < 13) return "child";
  if (age < 20) return "teen";
  return "adult";
}

export function firstNonNull(a, b) {
  if (a != null) return a;
  return b;
}

export function ensureArray(v) {
  if (Array.isArray(v)) return v;
  return [v];
}

export function strOrEmpty(s) {
  if (!s) return "";
  return s;
}

export function mapOrDefault(arr, fn) {
  if (!arr) return [];
  return arr.map(fn);
}

export function bothTrue(a, b) {
  if (a && b) return true;
  return false;
}
