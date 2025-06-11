import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.js";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./header.css";
export default function Header() {
  const [user, setUser] = useContext(UserContext);
  console.log(user);

  return (
    <div className="header">
      <div className="logo-box"></div>
      <div className="nav">
        <nav className="navbar">
          <Link to="/">Accueil</Link>
          {user && <Link to="/profil">Profil</Link>}
          <Link to="/jpo">Evenements</Link>
          {user && user.role === "admin" && <Link to="/admin">Admin</Link>}
          {!user && <Link to="/connexion">Connexion</Link>}
          {!user && <Link to="/inscription">Inscription</Link>}
        </nav>
      </div>
    </div>
  );
}
