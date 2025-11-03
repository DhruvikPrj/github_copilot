/**
 * Test WeatherWidget with mocked hook to exercise no-data branch.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('../src/hooks/useWeather', () => () => ({ data: null, loading: false, error: null }));
const WeatherWidget = require('../src/components/WeatherWidget').default;

test('renders no-data when hook returns null data', () => {
  render(<WeatherWidget cityName="TestCity" />);
  expect(screen.getByTestId('no-data')).toBeInTheDocument();
});
