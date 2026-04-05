import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './app.css';
import Header from "./components/Header";
import Current from "./components/Current";
import Hourly from "./components/Hourly";
import FiveDay from "./components/FiveDay";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!API_KEY) {
      console.error('API_KEY is not set. Please check your .env file.');
      return;
    }
    const fetchWeatherData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    };

    fetchWeatherData();
  }, []);

  return (
    <BrowserRouter>
    <div className="app">
      {weatherData && <Header weatherData={weatherData}/>}
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
