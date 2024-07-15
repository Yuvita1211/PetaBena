import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNames } from "./redux/actions";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";
import Button from "react-bootstrap/Button";
import Footer from "./Components/Footer"; // Import the Footer component
import "./App.css"; // Import custom CSS file
import Hero from "./Components/Hero";
import DisasterData from "./Components/DisasterData";
import DisasterMaps from "./Components/DisasterMaps";
import Infografis from "./Components/Infografis";
import DisasterVictims from "./Components/DisasterVictims";
import DisasterTotal from "./Components/DisasterTotal";

function App() {
  const dispatch = useDispatch();
  const { names, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchNames()); // Menggunakan fetchNames
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <Router>
      <div>
        <Navigation />
        <Hero />
        <DisasterData />
        <div className="button-container">
          <button className="center-button">
            <Link to="/victims">Lihat Data</Link>
          </button>
        </div>
        <DisasterMaps />
        <Infografis />
        <Footer /> {/* Include the Footer component */}
      </div>
      <Routes>
        <Route path="/victims" component={<DisasterVictims />} />
      </Routes>
    </Router>
  );
}

export default App;
