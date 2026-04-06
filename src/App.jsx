import { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './app.css';
import Header from "./components/Header";
import Current from "./components/Current";
import Hourly from "./components/Hourly";
import FiveDay from "./components/FiveDay";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState('Vancouver, BC, CA');

  const fetchWeatherByCoordinates = useCallback(async (lat, lon) => {
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    console.log(data);
    setWeatherData(data);
  }, []);

  const handleCitySearch = async (cityName) => {
    if (!API_KEY) {
      console.error('API_KEY is not set. Please check your .env file.');
      return;
    }

    try {
      const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`);
      const geoData = await geoResponse.json();

      if (geoData.length === 0) {
        console.error('City not found');
        return;
      }

      const { lat, lon } = geoData[0];
      console.log(`Found ${cityName} at coordinates: lat=${lat}, lon=${lon}`);

      if (geoData[0].state) {
        setCurrentLocation(`${geoData[0].name}, ${geoData[0].state}, ${geoData[0].country}`);
      } else {
        setCurrentLocation(`${geoData[0].name}, ${geoData[0].country}`);
      }

      await fetchWeatherByCoordinates(lat, lon);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    if (!API_KEY) {
      console.error('API_KEY is not set. Please check your .env file.');
      return;
    }
    const loadDefaultLocation = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=49.26&lon=-123.11&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    };
    loadDefaultLocation();
  }, []);

  return (
    <BrowserRouter>
    <div className="app">
      {weatherData && <Header weatherData={weatherData} currentLocation={currentLocation} onSearch={handleCitySearch}/>}
      <div className="content">
        <Routes>
          <Route path="/" element={weatherData && <Current weatherData={weatherData} />} />
          <Route path="/hourly" element={weatherData && <Hourly weatherData={weatherData} />} />
          <Route path="/5-day" element={weatherData && <FiveDay weatherData={weatherData} />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
