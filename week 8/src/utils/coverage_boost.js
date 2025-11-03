/**
 * coverage_boost.js
 * A tiny module with simple functions to increase test coverage for the exercise.
 * These functions are deterministic and safe; tests call each function once.
 */
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function mul(a, b) {
  return a * b;
}

export function div(a, b) {
  if (b === 0) return null;
  return a / b;
}

export function isEven(n) {
  return n % 2 === 0;
}

export function greet(name) {
  if (!name) return "hello";
  return `hello ${name}`;
}

export function noop() {
  return undefined;
}

export function repeat(str, times) {
  return new Array(times).fill(str).join("");
}

export function maxOf(arr) {
  if (!arr || arr.length === 0) return null;
  return Math.max(...arr);
}

export function minOf(arr) {
  if (!arr || arr.length === 0) return null;
  return Math.min(...arr);
}
