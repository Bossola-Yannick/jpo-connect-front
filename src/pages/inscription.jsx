import React from "react";
import "./connection-inscription.css";
// import "../js/verif-input.js";
import Button from "../components/Button/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="registration">
      <h1 className="registration-title">Inscription</h1>
      <form action="" id="form-registration">
        <h2 id="status-registration"></h2>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
        <span id="emailError"></span>
        <label for="password">Mot de Passe</label>
        <input type="password" name="password" id="password" />
        <span id="passwordError"></span>
        <label for="confirmPassword">Confirmtion Mot de Passe</label>
        <input type="password" name="password" id="confirmPassword" />
        <span id="identiquePasswordError"></span>
        <h2 className="subtitle-registration">Mes Informations</h2>
        <label for="nom">Nom</label>
        <input type="text" name="firstname" id="nom" />
        <label for="prenom">Prénom</label>
        <input type="text" name="lastname" id="prenom" />
        <label for="adresse">Adresse</label>
        <input type="text" name="adress" id="adresse" />
        <label for="codeP">Code Postale</label>
        <input type="number" name="postalCode" id="codeP" />
        <span id="codePostalError"></span>
        <label for="city">Ville</label>
        <input type="text" name="city" id="city" />
        <Button className="button-registration">Valider</Button>
      </form>
      <p className="text-info">
        Si vous avez déjà un compte veuillez vous{" "}
        <Link to="/connexion" className="text-info">
          Connecter
        </Link>
      </p>
    </section>
  );
}
