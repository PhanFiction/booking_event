import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import SignUpPage from "../components/SignUp";
import LoginPage from "../components/Login";
import Nav from "../components/Nav/Nav";

export default (
  <>
    <Nav />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </>
);