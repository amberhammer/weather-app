import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './app.css';
import Header from "./components/Header";
import Current from "./components/Current";
import Hourly from "./components/Hourly";
import FiveDay from "./components/FiveDay";

function App() {

  let weatherData = {
   "lat":33.44,
   "lon":-94.04,
   "timezone":"America/Chicago",
   "timezone_offset":-18000,
   "current":{
      "dt":1684929490,
      "sunrise":1684926645,
      "sunset":1684977332,
      "temp":292.55,
      "feels_like":292.87,
      "pressure":1014,
      "humidity":89,
      "dew_point":290.69,
      "uvi":0.16,
      "clouds":53,
      "visibility":10000,
      "wind_speed":3.13,
      "wind_deg":93,
      "wind_gust":6.71,
      "weather":[
         {
            "id":803,
            "main":"Clouds",
            "description":"broken clouds",
            "icon":"04d"
         }
      ]
   },
   "minutely":[
      {
         "dt":1684929540,
         "precipitation":0
      }
   ],
   "hourly":[
      {
         "dt":1684926000,
         "temp":292.01,
         "feels_like":292.33,
         "pressure":1014,
         "humidity":91,
         "dew_point":290.51,
         "uvi":0,
         "clouds":54,
         "visibility":10000,
         "wind_speed":2.58,
         "wind_deg":86,
         "wind_gust":5.88,
         "weather":[
            {
               "id":803,
               "main":"Clouds",
               "description":"broken clouds",
               "icon":"04n"
            }
         ],
         "pop":0.15
      },
      {
         "dt":1684929600,
         "temp":290.45,
         "feels_like":290.78,
         "pressure":1015,
         "humidity":86,
         "dew_point":289.12,
         "uvi":0,
         "clouds":62,
         "visibility":10000,
         "wind_speed":2.92,
         "wind_deg":92,
         "wind_gust":6.45,
         "weather":[
            {
               "id":803,
               "main":"Clouds",
               "description":"broken clouds",
               "icon":"04n"
            }
         ],
         "pop":0.12
      },
      {
         "dt":1684933200,
         "temp":289.87,
         "feels_like":290.15,
         "pressure":1016,
         "humidity":84,
         "dew_point":288.45,
         "uvi":0.5,
         "clouds":48,
         "visibility":10000,
         "wind_speed":3.12,
         "wind_deg":89,
         "wind_gust":6.78,
         "weather":[
            {
               "id":802,
               "main":"Clouds",
               "description":"scattered clouds",
               "icon":"03d"
            }
         ],
         "pop":0.08
      },
      {
         "dt":1684936800,
         "temp":294.23,
         "feels_like":294.56,
         "pressure":1014,
         "humidity":78,
         "dew_point":288.92,
         "uvi":4.2,
         "clouds":35,
         "visibility":10000,
         "wind_speed":3.45,
         "wind_deg":94,
         "wind_gust":7.12,
         "weather":[
            {
               "id":802,
               "main":"Clouds",
               "description":"scattered clouds",
               "icon":"03d"
            }
         ],
         "pop":0.05
      },
      {
         "dt":1684940400,
         "temp":296.78,
         "feels_like":297.23,
         "pressure":1013,
         "humidity":72,
         "dew_point":288.34,
         "uvi":7.8,
         "clouds":25,
         "visibility":10000,
         "wind_speed":3.78,
         "wind_deg":96,
         "wind_gust":7.45,
         "weather":[
            {
               "id":801,
               "main":"Clouds",
               "description":"few clouds",
               "icon":"02d"
            }
         ],
         "pop":0.02
      }
   ],
   "daily":[
      {
         "dt":1684951200,
         "sunrise":1684926645,
         "sunset":1684977332,
         "moonrise":1684941060,
         "moonset":1684905480,
         "moon_phase":0.16,
         "summary":"Expect a day of partly cloudy with rain",
         "temp":{
            "day":299.03,
            "min":290.69,
            "max":300.35,
            "night":291.45,
            "eve":297.51,
            "morn":292.55
         },
         "feels_like":{
            "day":299.21,
            "night":291.37,
            "eve":297.86,
            "morn":292.87
         },
         "pressure":1016,
         "humidity":59,
         "dew_point":290.48,
         "wind_speed":3.98,
         "wind_deg":76,
         "wind_gust":8.92,
         "weather":[
            {
               "id":500,
               "main":"Rain",
               "description":"light rain",
               "icon":"10d"
            }
         ],
         "clouds":92,
         "pop":0.47,
         "rain":0.15,
         "uvi":9.23
      }
   ],
    "alerts": [
    {
      "sender_name": "NWS Philadelphia - Mount Holly (New Jersey, Delaware, Southeastern Pennsylvania)",
      "event": "Small Craft Advisory",
      "start": 1684952747,
      "end": 1684988747,
      "description": "...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...\n* WHAT...North winds 15 to 20 kt with gusts up to 25 kt and seas\n3 to 5 ft expected.\n* WHERE...Coastal waters from Little Egg Inlet to Great Egg\nInlet NJ out 20 nm, Coastal waters from Great Egg Inlet to\nCape May NJ out 20 nm and Coastal waters from Manasquan Inlet\nto Little Egg Inlet NJ out 20 nm.\n* WHEN...From 5 PM this afternoon to 3 AM EST Friday.\n* IMPACTS...Conditions will be hazardous to small craft.",
      "tags": [

      ]
    }
    ]
  }

  return (
    <BrowserRouter>
    <div className="app">
      <Header weatherData={weatherData}/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Current weatherData={weatherData} />} />
          <Route path="/hourly" element={<Hourly weatherData={weatherData} />} />
          <Route path="/5-day" element={<FiveDay weatherData={weatherData} />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
