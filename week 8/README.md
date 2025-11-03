## Week 8 - Weather Dashboard (WeatherWidget)

This module provides a reusable React component `WeatherWidget({ cityName })` that fetches weather data from OpenWeatherMap, caches responses client-side (localStorage fallback), and exposes a concise UI.

Key features

- Uses axios to call OpenWeatherMap API (units=metric)
- API key provided via environment variable `REACT_APP_WEATHER_API_KEY` (.env)
- Client-side TTL cache (localStorage + memory fallback)
- Jest + React Testing Library tests with mocked network calls
- ESLint (Airbnb) and GitHub Actions workflows for CI and CodeQL

Setup

1. Copy `.env.example` to `.env` and set `REACT_APP_WEATHER_API_KEY`.
2. From this folder run:

```bash
npm install
npm test
```

Files of interest

- `src/components/WeatherWidget.js` - Reusable UI component
- `src/hooks/useWeather.js` - Fetch + cache hook
- `src/utils/cache.js` - TTL cache
- `__tests__` - Tests (all network calls mocked)

Notes

- Do not commit `.env` with secrets.
