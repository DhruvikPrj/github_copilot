/**
 * userUtils.js
 * Helpers for user objects: full name, display name, initials, status
 */

/**
 * Safely build full name from user object.
 * @param {{firstName?:string,lastName?:string}} user
 * @returns {string}
 */
export function getUserFullName(user) {
  if (!user) return "";
  const first = user.firstName || "";
  const last = user.lastName || "";
  return `${first}${first && last ? " " : ""}${last}`.trim();
}

/**
 * Display name fallback to username/email if names missing
 * @param {{firstName?:string,lastName?:string,username?:string,email?:string}} user
 * @returns {string}
 */
export function getDisplayName(user) {
  if (!user) return "";
  const name = getUserFullName(user);
  if (name) return name;
  return user.username || user.email || "";
}

/**
 * Is user active
 * @param {{status?:string,isActive?:boolean}} user
 * @returns {boolean}
 */
export function isUserActive(user) {
  if (!user) return false;
  return user.status === "active" || user.isActive === true;
}

/**
 * Get initials from first and last name. Returns empty string if missing.
 * @param {{firstName?:string,lastName?:string}} user
 * @returns {string}
 */
export function getUserInitials(user) {
  if (!user) return "";
  const f = user.firstName || "";
  const l = user.lastName || "";
  if (!f && !l) return "";
  return `${(f[0] || "").toUpperCase()}${(l[0] || "").toUpperCase()}`;
}

/**
 * Get random user from array (pure - returns null for invalid)
 * @param {Array} users
 * @returns {object|null}
 */
export function getRandomUser(users) {
  if (!Array.isArray(users) || users.length === 0) return null;
  const idx = Math.floor(Math.random() * users.length);
  return users[idx];
}

export default { getUserFullName, getDisplayName, isUserActive, getUserInitials, getRandomUser };
