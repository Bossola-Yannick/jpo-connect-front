import React from "react";
import Button from "../Button/Button";
import "./card.css";

export default function Card() {
  return (
    <article className="card">
      <h3 className="card-location">
        MARSEILLE :<span className="card-title"> Journée Portes Ouvertes</span>
      </h3>
      <p className="card-date">Mercredi 31 Décembres 2025</p>
      <p className="card-description">
        Vennez découvrir nos locaux et nos formation lors de cette journée.
        Profitez de ce momentpour échanger avec nos étudients et nos
        accompagnateur.
      </p>
      <Button className="card-button">S'inscrire</Button>
    </article>
  );
}
