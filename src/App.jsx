import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Current from "./components/Current";
import Hourly from "./components/Hourly";
import FiveDay from "./components/FiveDay";

function App() {

  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Current />} />
          <Route path="/hourly" element={<Hourly />} />
          <Route path="/5-day" element={<FiveDay />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
