import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Home from "./Pages/Auth/index";
import Calculator from "./Pages/calculator";
import Countdown from "./Pages/countdown";
import Notes from "./Pages/notes";
import Compass from "./Pages/compass";
import Loader from '../src/Components/Screen Loader/ScreenLoader'; // Import your loader component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the loader until the window is fully loaded
    window.onload = () => {
      setLoading(false); // When the page is fully loaded, stop showing the loader
    };

    // For safety, if window.onload doesn't trigger (fallback), we hide the loader after a max of 5 seconds
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(fallbackTimer); // Cleanup fallback timer
  }, []);

  if (loading) {
    return <Loader />; // Show only the loader while the page is loading
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/compass" element={<Compass />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
