import React from "react";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/homepage";
import Profil from "./pages/profil";
import JPO from "./pages/jpo-page";
import Admin from "./pages/admin-page";
import Register from "./pages/inscription";
import Connection from "./pages/connection";

function App() {
  return (
    <Router>
      <Header />
      <section className="main">
        <div style={{ padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/jpo" element={<JPO />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/connexion" element={<Connection />} />
            <Route path="/inscription" element={<Register />} />
          </Routes>
        </div>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
