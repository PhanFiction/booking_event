import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Home from "../components/Home";
import Airport from "../components/Airport";
import Booking from "../components/Booking";

export default (
  <Router>
    <Nav />
      <div className="container mx-auto mt-28 px-5">
        <Routes>
          <Route path="/airports" element={<Airport />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  </Router>
);