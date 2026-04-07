import { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './app.css';
import Header from "./components/Header";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Current from "./components/Current";
import Hourly from "./components/Hourly";
import FiveDay from "./components/FiveDay";
import Footer from "./components/Footer";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState('Vancouver, BC, CA');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [units, setUnits] = useState("metric");

  const fetchWeatherByCoordinates = useCallback(async (lat, lon) => {
   try {
      const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`);
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
      setError(null);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError("Error loading weather data. Please try again later.");
      setLoading(false);
      setCurrentLocation('');
      return;
    }  
  }, [units]);

  const handleCitySearch = async (cityName) => {
    setLoading(true);
    setError(null);

    if (!API_KEY) {
      console.error('API_KEY is not set. Please check your .env file.');
      setError("Error loading weather data. Please try again later.");
      setLoading(false);
      return;
    }

    try {
      const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`);
      const geoData = await geoResponse.json();

      if (geoData.length === 0) {
        setError("No city found. Please try again.");
        setLoading(false);
        setCurrentLocation('');
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
      setError("Error loading weather data. Please try again later.");
      setLoading(false);
      setCurrentLocation('');
    }
  };

  const handleUnitsChange = (e) => {
    const newUnits = e.target.value;
    setUnits(newUnits);
    if (weatherData) {
      fetchWeatherByCoordinates(weatherData.lat, weatherData.lon);
    }
  };

  const unitLabels = {
   metric: {
      temp: "°C",
      speed: "km/h"
   },
   imperial: {
      temp: "°F",
      speed: "mph"
   }
  };

  useEffect(() => {
    if (!API_KEY) {
      console.error('API_KEY is not set. Please check your .env file.');
      return;
    }
    const loadDefaultLocation = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=49.26&lon=-123.11&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
        setError(null);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError("Error loading weather data. Please try again later.");
        setLoading(false);
      }
    };
    loadDefaultLocation();
  }, []);

  useEffect(() => {
    if (weatherData) {
      fetchWeatherByCoordinates(weatherData.lat, weatherData.lon);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [units]);

  return (
    <BrowserRouter>
    <div className="app">
      {weatherData && <Header weatherData={weatherData} currentLocation={currentLocation} onSearch={handleCitySearch} hasError={!!error} handleUnitsChange={handleUnitsChange} units={units} />}
      <div className="content">
        {loading && <div className="loading"><Loading /></div>}
        {error && <div className="error"><Error error={error} /></div>}
        {!loading && !error && (
          <Routes>
            <Route path="/" element={weatherData && <Current weatherData={weatherData} unitLabels={unitLabels[units]} units={units} />} />
            <Route path="/hourly" element={weatherData && <Hourly weatherData={weatherData} unitLabels={unitLabels[units]} units={units} />} />
            <Route path="/5-day" element={weatherData && <FiveDay weatherData={weatherData} unitLabels={unitLabels[units]} units={units} />} />
          </Routes>
        )}
      </div>
      <Footer />
    </div>
  </BrowserRouter>
  )
}

export default App
