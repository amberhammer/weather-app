# Weather Forecasting App 🌤️

A responsive weather application built with React and Vite that provides real-time weather data, hourly forecasts, and 5-day forecasts powered by the OpenWeatherMap API. Search any city to view current conditions, hourly breakdowns, and extended forecasts with timezone-aware displays.

## Features

- **City search** — look up weather for any city worldwide with geocoding
- **Current conditions** — temperature, weather description, wind, humidity, and more
- **Hourly forecast** — 24-hour breakdown of weather conditions per hour
- **5-day forecast** — daily summary cards with high/low temps and conditions
- **Timezone-aware times** — all times display in the searched location's timezone
- **°C / °F toggle** — switch temperature units instantly without re-fetching
- **Weather alerts** — active weather alerts displayed for your location
- **Error handling** — user-friendly messages for invalid cities and network issues
- **Responsive design** — optimized for desktop, tablet, and mobile devices

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI framework and component architecture |
| Vite | Build tool and dev server |
| React Router | Client-side routing (Current, Hourly, 5-Day pages) |
| CSS Modules | Component-scoped styling |
| OpenWeatherMap API | Weather data (current + forecast) |
| React Feather | Icon library |

## Getting Started

### Prerequisites

- Node.js (v16+)
- An [OpenWeatherMap API key](https://openweathermap.org/api) (free tier works)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amberhammer/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root and add your API key:
   ```
   VITE_API_KEY=your_openweather_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The app will be running at `http://localhost:5173`.

## Project Structure

```
src/
├── components/              # UI components
│   ├── Header.jsx          # Navigation, search, units toggle
│   ├── Current.jsx         # Current weather display
│   ├── Hourly.jsx          # 24-hour forecast
│   ├── FiveDay.jsx         # 5-day forecast
│   ├── Conditions.jsx      # Detailed weather conditions
│   ├── Alert.jsx           # Weather alerts display
│   ├── Loading.jsx         # Loading state
│   └── Error.jsx           # Error state
├── utils/
│   └── dateUtils.js        # Timezone-aware date/time formatting
├── App.jsx                 # Main app component with state management
└── *.module.css            # Scoped styles per component
```

## API Usage

This app uses two OpenWeatherMap endpoints:

- **Geocoding API** — `api.openweathermap.org/geo/1.0/direct` (city name → coordinates)
- **OneCall API 3.0** — `api.openweathermap.org/data/3.0/onecall` (weather data for coordinates)

All API calls are handled in `App.jsx` with error handling for invalid cities, network issues, and rate limiting.

## Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Key Features Explained

**Timezone-Aware Times**: The app uses `timezone_offset` from the OpenWeather API to display all times in the location's timezone using JavaScript's `Intl.DateTimeFormat`.

**Units Management**: State in `App.jsx` tracks metric/imperial preference. When the unit is switched, the app refetches weather data and conditionally applies conversion factors (e.g., m/s → km/h for metric).

**Default Location**: Vancouver, BC, Canada loads on app start. Search any city to view its weather.

## Environment Variables

Create a `.env.local` file with your OpenWeatherMap API key:

```
VITE_API_KEY=your_api_key
```