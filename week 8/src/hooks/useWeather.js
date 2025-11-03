/**
 * useWeather.js
 * React hook that fetches weather for a city using OpenWeatherMap and caches results.
 */
import { useEffect, useState } from "react";
import axios from "axios";
import { getCache, setCache } from "../utils/cache";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function buildUrl(city) {
  return `${BASE_URL}?q=${encodeURIComponent(
    city
  )}&units=metric&appid=${API_KEY}`;
}

export default function useWeather(cityName) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(cityName));
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (!cityName) {
      setLoading(false);
      setData(null);
      return () => {
        mounted = false;
      };
    }

    const cacheKey = `weather:${cityName.toLowerCase()}`;
    const cached = getCache(cacheKey);
    if (cached) {
      setData(cached);
      setLoading(false);
      return () => {
        mounted = false;
      };
    }

    setLoading(true);
    setError(null);

    axios
      .get(buildUrl(cityName))
      .then((res) => {
        if (!mounted) return;
        const payload = {
          temp: res.data.main.temp,
          humidity: res.data.main.humidity,
          description:
            res.data.weather &&
            res.data.weather[0] &&
            res.data.weather[0].description,
        };
        setCache(cacheKey, payload, 5 * 60 * 1000);
        setData(payload);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [cityName]);

  return { data, loading, error };
}

export { buildUrl };

export function buildPayload(res) {
  return {
    temp: res.data.main.temp,
    humidity: res.data.main.humidity,
    description:
      res.data.weather &&
      res.data.weather[0] &&
      res.data.weather[0].description,
  };
}
