# Week 6 — Utility Modules

This folder contains a small, modular utility library split into focused files. The goal is to provide pure, testable helpers for common operations (dates, strings, math, arrays, users and logging).

## Overview

- dateUtils.js — date/time formatting and helpers (pure, no external deps)
- stringUtils.js — capitalization, email validation, slugify, truncate
- mathUtils.js — numeric helpers: sum, average, percentage, random helpers
- arrayUtils.js — flatten, chunk, unique, merge, intersection
- userUtils.js — user display helpers, initials, status checks
- logUtils.js — small wrappers around console with consistent timestamp

Each module exports named functions and a default object for convenience.

## Usage Examples

import { dateUtils, stringUtils, mathUtils, arrayUtils, userUtils, logUtils } from "./utils.js";

// date
console.log(dateUtils.formatDate(new Date()));

// string
console.log(stringUtils.slugify("Hello World!"));

// math
console.log(mathUtils.percentage(1, 4));

// arrays
console.log(arrayUtils.chunk([1,2,3,4], 2));

// users
console.log(userUtils.getUserInitials({ firstName: "Ann", lastName: "Lee" }));

// logging
logUtils.info("module loaded");

## Key Functions

- formatDate(date): "YYYY-MM-DD"
- formatDateTime(date): "YYYY-MM-DD HH:mm:ss"
- isValidEmail(email): boolean
- slugify(str): string
- average(nums): number (0 for empty)
- percentage(part, total): number with 2 decimals
- flatten(arr): flatten one level
- chunk(array, size): Array of chunks
- getUserFullName(user): safe name builder
- getUserInitials(user): initials or empty string

## Edge Cases / Limitations

- Date functions return empty string for invalid inputs. They are not a replacement for a full date library when dealing with timezones or locale-specific formatting.
- Email validation is basic and intended for common cases, not full RFC compliance.
- Random functions use Math.random; tests mock randomness for determinism.

## Testing Guide

This module uses Jest. From the `week 6` directory:

```bash
npm install
npm test
```

Tests are located in `week 6/tests/`.
