# PR Draft — Week 8: Weather Dashboard with caching

Summary

- Adds a reusable `WeatherWidget` component and `useWeather` hook that fetch and cache OpenWeatherMap data.
- Adds a small TTL cache utility (`src/utils/cache.js`) with localStorage + in-memory fallback.
- Adds comprehensive tests (Jest + React Testing Library) with mocked axios calls.
- Adds ESLint (Airbnb) config and GitHub Actions workflows for CI and CodeQL.

Changelog

- New: `src/components/WeatherWidget.js`
- New: `src/hooks/useWeather.js`
- New: `src/utils/cache.js`
- New tests in `__tests__/` covering happy path, cache and error states
- New CI workflows: `.github/workflows/ci.yml`, `.github/workflows/codeql.yml`

Test coverage

- This PR enforces a global coverage threshold of 95% (branches/functions/lines/statements). The tests included mock all network requests.

Security / CodeQL

- CodeQL workflow added; if CodeQL surfaces any quick-fixable issues, Copilot Autofix will be used to propose fixes (e.g., dependency updates or insecure patterns).

How to test locally

1. Copy `.env.example` to `.env` and set `REACT_APP_WEATHER_API_KEY`.
2. npm install && npm test
