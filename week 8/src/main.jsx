import React from "react";
import { createRoot } from "react-dom/client";
import WeatherWidget from "./index";

function App() {
    return (
        <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
            <h1>Weather Dashboard Demo</h1>
            <p>Enter a city below or use the sample widget:</p>
            <div style={{ marginTop: 16 }}>
                <WeatherWidget cityName="London" />
            </div>
        </div>
    );
}

const el = document.getElementById("root");
const root = createRoot(el);
root.render(<App />);
