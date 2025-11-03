/**
 * cache.js
 * Simple localStorage-backed TTL cache with in-memory fallback.
 * Exports getCache and setCache.
 */

const isLocalStorageAvailable = (() => {
  try {
    const k = "__cache_test__";
    window.localStorage.setItem(k, "1");
    window.localStorage.removeItem(k);
    return true;
  } catch (e) {
    return false;
  }
})();

const memoryStore = {};

function setCache(key, value, ttlMs = 5 * 60 * 1000) {
  const payload = { value, expiresAt: Date.now() + ttlMs };
  if (isLocalStorageAvailable) {
    window.localStorage.setItem(key, JSON.stringify(payload));
    return true;
  }
  memoryStore[key] = payload;
  return true;
}

function getCache(key) {
  if (isLocalStorageAvailable) {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      if (parsed.expiresAt && parsed.expiresAt > Date.now()) {
        return parsed.value;
      }
      window.localStorage.removeItem(key);
      return null;
    } catch (e) {
      window.localStorage.removeItem(key);
      return null;
    }
  }
  const entry = memoryStore[key];
  if (!entry) return null;
  if (entry.expiresAt > Date.now()) return entry.value;
  // expired
  delete memoryStore[key];
  return null;
}

export { setCache, getCache };
