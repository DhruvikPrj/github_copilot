# Utils Module

## Overview

This repository contains small utility functions grouped into three files under `utils/`:

- `apiUtils.js` - small wrappers around HTTP calls (uses `axios`) to fetch weather data and placeholder data (users/posts).
- `mathUtils.js` - pure utility functions for common math tasks (factorial, fibonacci, array helpers, random integer generation, etc.).
- `stringUtils.js` - text-processing helpers (email/url extraction, word counting, capitalization, reversing strings).

The goal is to provide compact, well-tested helper functions for small projects and demos.

## Usage Examples

Import functions from the utils and call them directly (ES modules):

```js
import { getWeather } from "./utils/apiUtils.js";
import { calculateFactorial } from "./utils/mathUtils.js";
import { extractEmails } from "./utils/stringUtils.js";

// Example: get weather (async)
const data = await getWeather("London", process.env.WEATHER_API_KEY);
console.log(data.location.name);

// Example: math
console.log(calculateFactorial(5)); // 120

// Example: text
console.log(extractEmails("Contact: alice@example.com"));
```

## Key Functions

- apiUtils.getWeather(city, apiKey): Returns weather data from weatherapi.com for `city`.
- apiUtils.getUsers(): Returns users list from jsonplaceholder.typicode.com.
- apiUtils.getPostsByUser(userId): Returns posts for a user id.

- mathUtils.calculateFactorial(n): Returns n!; throws on negative input.
- mathUtils.fibonacci(n): Returns the nth fibonacci number (0-indexed); throws on negative input.
- mathUtils.isPrime(n): Returns true if n is prime.
- mathUtils.sumArray(arr) / maxInArray(arr): Array helpers that validate input.
- mathUtils.randomInt(min, max): Inclusive random integer between min and max.

- stringUtils.extractEmails(text): Returns array of emails found.
- stringUtils.extractUrls(text): Returns array of URLs found.
- stringUtils.wordCount(text): Returns number of words (0 for falsy input).
- stringUtils.capitalizeWords(text): Capitalizes the first letter of each word.
- stringUtils.reverseString(str): Unicode-safe reversal of a string (handles emoji correctly).

## Edge Cases / Limitations

- `apiUtils` uses `axios` and expects 200 status codes; non-200 results throw errors. Network errors bubble up.
- `mathUtils.randomInt` uses Math.random; tests validate range but not distribution.
- `stringUtils` extractors are regex-based—complex edge cases for email/URL detection may not be covered.

## Running Tests

Install dependencies and run tests with coverage:

```bash
npm install
npm test
```

Tests are written with Jest and are ESM-aware (the project uses `type: "module"`).

## Notes

The tests mock network calls in `apiUtils` and aim for high coverage across normal and edge cases.
