/**
 * WeatherWidget.js
 * Reusable component that displays temperature, humidity and description for a city.
 * Props: { cityName: string }
 */
import React from "react";
import PropTypes from "prop-types";
import useWeather from "../hooks/useWeather";

export default function WeatherWidget({ cityName }) {
  const { data, loading, error } = useWeather(cityName);

  if (!cityName) return <div data-testid="no-city">No city provided</div>;
  if (loading) return <div data-testid="loading">Loading...</div>;
  if (error) return <div data-testid="error">Error loading weather</div>;
  if (!data) return <div data-testid="no-data">No data</div>;

  return (
    <div data-testid="weather-widget" style={{ maxWidth: 320 }}>
      <h3>{cityName}</h3>
      <p>
        <strong>Temperature:</strong>{" "}
        <span data-testid="temp">{data.temp} °C</span>
      </p>
      <p>
        <strong>Humidity:</strong>{" "}
        <span data-testid="humidity">{data.humidity}%</span>
      </p>
      <p>
        <strong>Conditions:</strong>{" "}
        <span data-testid="desc">{data.description}</span>
      </p>
    </div>
  );
}

WeatherWidget.propTypes = {
  cityName: PropTypes.string,
};

WeatherWidget.defaultProps = {
  cityName: "",
};
