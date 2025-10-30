/**
 * logUtils.js
 * Small logging helpers that wrap console and add ISO timestamp.
 */

/**
 * Log info message
 * @param {any} message
 */
export function info(message) {
  // side-effecting by design
  // keep consistent signature and timestamp
  console.log("[INFO]", new Date().toISOString(), message);
}

/**
 * Log warning
 * @param {any} message
 */
export function warn(message) {
  console.warn("[WARN]", new Date().toISOString(), message);
}

/**
 * Log debug (prints JSON if object)
 * @param {any} obj
 */
export function debug(obj) {
  if (typeof obj === "string") console.debug("[DEBUG]", new Date().toISOString(), obj);
  else console.debug("[DEBUG]", new Date().toISOString(), JSON.stringify(obj, null, 2));
}

/**
 * Log error
 * @param {any} err
 */
export function error(err) {
  console.error("[ERROR]", new Date().toISOString(), err);
}

export default { info, warn, debug, error };
