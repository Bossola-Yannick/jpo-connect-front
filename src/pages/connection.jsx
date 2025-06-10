import React from "react";
import "./connection-inscription.css";
// import "../js/verif-input.js";
import Button from "../components/Button/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Connection() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(
      "http://localhost/api/Controllers/UserController.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      }
    );

    const result = await response.json();

    const messageEl = document.getElementById("connection-message");
    if (result.status === "success") {
      messageEl.textContent = result.message;
      messageEl.style.color = "green";
      // Redirection vers une page protégée ?
      // window.location.href = "/profil";
    } else {
      messageEl.textContent = result.message;
      messageEl.style.color = "red";
    }
  };

  return (
    <section className="connection">
      <h1 className="connection-title">Connexion</h1>
      <form onSubmit={handleSubmit} id="form-connection">
        <label htmlFor="email">Votre Email</label>
        <input type="email" name="email" id="email" />
        {/* <span id="emailError"></span> */}
        <label htmlFor="password">Votre Mot de Passe</label>
        <input type="password" name="password" id="password" />
        <Button className="button-registration">Connexion</Button>
        {/* <span id="connection-message"></span> */}
      </form>
      <p className="text-info">
        Si vous n'avez pas de compte veuillez vous{" "}
        <Link to="/inscription" className="text-info">
          Inscrire
        </Link>
      </p>
    </section>
  );
}
