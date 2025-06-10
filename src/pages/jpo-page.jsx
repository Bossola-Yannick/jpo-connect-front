import React, { useState } from "react";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import "./jpo-page.css";

export default function JPO() {
  const locations = [
    "marseille",
    "martigues",
    "cannes",
    "paris",
    "toulon",
    "brignoles",
  ];
  const [activeLocation, setActiveLocation] = useState("marseille");
  function handleActive(location) {
    setActiveLocation(location);
  }
  return (
    <div className="jpo-page">
      <h1>Nos Prochaines Portes Ouvertes</h1>
      <h4 className="location-select">Sélectionnez le campus</h4>
      <div className="box-location-select">
        {locations.map((location) => (
          <Button
            key={location}
            onClick={() => handleActive(location)}
            className={
              "button-location" +
              (activeLocation === location ? " button-location-active" : "")
            }
          >
            {location.toUpperCase()}
          </Button>
        ))}
      </div>
      <div className="box-jpo">
        <Card />
        <Card />
        <Card />
      </div>
      <section className="jpo-program">
        <h2 className="subtitle-jpo">Programme des JPO :</h2>
        <div className="program-box">
          <article className="program">
            <h3 className="program-title">Format découverte :</h3>
            <ul>
              <li>14h : Accueil + Présentation de l'école et des formations</li>
              <li>14h30 : Visite de l'école, ateliers & stand</li>
              <li>15h : Session de questions/réponses</li>
            </ul>
          </article>
          <article className="program">
            <h3 className="program-title">Format classique :</h3>
            <ul>
              <li>14h : Accueil </li>
              <li>14h30 : Présentation de l'école et des formations</li>
              <li>15h : Visite de l'école, ateliers & stand</li>
            </ul>
          </article>
        </div>
        <p className="program-info">
          Pendant nos journées portes ouvertes nos équipes et nos étudiants
          seront présents pour vous faire découvrir l'ensemble de nos cursus, au
          travers d'ateliers de découvertes et de stands dédiés à nos
          différenttes formations.
        </p>
      </section>
    </div>
  );
}
