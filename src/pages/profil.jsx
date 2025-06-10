import React from "react";
// import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import "./profil.css";

export default function Profil() {
  return (
    <section className="profil-page">
      <h1 className="profil-title">Bienvenu sur votre profil</h1>
      <div className="profil">
        <div className="profil-identity">
          <p className="profil-tag">
            Nom : <span className="profil-info">BOSSOLA</span>
          </p>
          <p className="profil-tag">
            Prénom : <span className="profil-info">YANNICK</span>
          </p>
        </div>
        <div className="profil-connection">
          <p className="profil-tag">
            Mail :{" "}
            <span className="profil-info">yannick.bossola@laplateforme.io</span>
          </p>
          <p className="profil-tag">
            Mot de Passe: <span className="profil-info">***********</span>
          </p>
        </div>
      </div>
      <section className="jpo-list">
        <h2 className="jpo-list-title">Vos Inscription aux JPO</h2>
        <div className="jpo-list-box">
          <Card />
        </div>
      </section>
    </section>
  );
}
