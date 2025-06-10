import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="logo-box"></div>
      <div className="nav">
        <nav className="navbar">
          <Link to="/">Accueil</Link>
          <Link to="/profil">Profil</Link>
          <Link to="/jpo">Evenements</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/connexion">Connexion</Link>
          <Link to="/inscription">Inscription</Link>
        </nav>
      </div>
    </div>
  );
}
