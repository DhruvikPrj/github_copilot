Copilot Review Feedback (suggested inline comments)

Summary praise:

Great work splitting the monolithic `utils.js` into focused modules. The code is easier to test, reason about and maintain. The new files have clear responsibilities and are small.

Suggested inline feedback / recommendations:

- Naming: consider consistent pluralization for modules that operate on collections (e.g., `arrayUtils` is clear). Avoid mixing `camelCase` and nouns for module names.
- Exports: You export both named functions and default objects. This is convenient but consider encouraging a single import style in the README (named imports recommended).
- Error handling: For date parsing, returning empty string is safe; consider also exposing an `isValidDate` helper for callers who need to detect invalid inputs.
- Tests: Add a couple of property-based tests for `chunk` (e.g., re-joining chunks equals original array) and for `merge(..., dedupe=true)` ensure stable ordering expectation.
- Randomness: Where randomness matters, consider allowing an optional RNG injection for pure reproducible behavior in production code (e.g., `randomInt(min,max, rng=Math.random)`).

Extra tests to consider:

- `formatDateTime` timezone edge cases across DST boundaries (if you ever add timezone support).
- Invalid input types (e.g., objects passed to string helpers) to confirm functions coerce or fail as expected.

Small refactor suggestions:

- Move `utils.js` index to `index.js` if this folder becomes a package root — that's the conventional filename for package entry points.
- Consider extracting `console` wrappers behind an injectable logger to support environment-specific logging (test vs prod).

Overall: Very solid. The test coverage and determinism are good. These extra small tests and tiny interface tweaks would further harden the library.
