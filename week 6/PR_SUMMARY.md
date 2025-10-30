Title: Modularize and clean up utils.js into reusable utility modules

Summary:

This PR splits a large, messy `utils.js` into focused, testable modules:

- `dateUtils.js` — date/time helpers
- `stringUtils.js` — string/email/slug helpers
- `mathUtils.js` — numeric helpers
- `arrayUtils.js` — flatten, chunk, unique, merge, intersection
- `userUtils.js` — name, initials, status helpers
- `logUtils.js` — logging helpers
- `utils.js` — index re-exports (backwards-compatible)

What I changed and why:

- Removed duplicated functions and consolidated behavior (e.g., email checks, avg/sum variants) to avoid inconsistency and make the code DRY.
- Converted impure functions to pure where possible and added safe fallbacks for invalid inputs.
- Added comprehensive JSDoc for public functions and exported both named functions and default objects for convenience.
- Added Jest tests (under `tests/`) with normal and edge case coverage. Mocked randomness and console where appropriate so tests are deterministic.

Risks / Breaking changes:

- External code that imported individual functions from the old `utils.js` file via named imports may need to update import paths (but `utils.js` re-exports modules to reduce breakage).
- Some minor behavioral changes: percentage now returns a number (2 decimals) instead of a string in the old implementation; invalid dates return empty strings consistently.

Validation steps taken:

1. Added unit tests for every module (2-4 tests each). They include edge cases like empty arrays and invalid inputs.
2. Verified deterministic tests by mocking `Math.random` and `console` where needed.
3. README updated to document usage and testing instructions.

Metrics:

- Files added: 8 (6 modules + index + README + tests folder)
- Lines changed: ~150+ (refactor and tests)
