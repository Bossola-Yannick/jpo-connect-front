import React from "react";
import Button from "../components/Button/Button";
import "./admin-page.css";

export default function Admin() {
  return (
    <div className="content">
      <section className="stats">
        <h2>Stats des JPO</h2>
        <div className="remplissage">
          <label>Taux de remplissage</label>
          <progress value="85" max="100"></progress>
          <span>85%</span>
        </div>
      </section>

      <section className="jpo-table">
        <h2>Les JPO</h2>
        <table>
          <thead>
            <tr>
              <th>Lieu</th>
              <th>Date</th>
              <th>Nom</th>
              <th>Description</th>
              <th>Capacité</th>
              <th>Inscrit</th>
              <th>Organisateur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MARSEILLE</td>
              <td>15-03-2025</td>
              <td>JPO MARSEILLE</td>
              <td>Journée portes ouvertes à Marseille</td>
              <td>100</td>
              <td>86</td>
              <td>Yannick</td>
            </tr>
            <tr>
              <td>MARSEILLE</td>
              <td>15-03-2025</td>
              <td>JPO MARSEILLE</td>
              <td>Journée portes ouvertes à Marseille</td>
              <td>100</td>
              <td>86</td>
              <td>Yannick</td>
            </tr>
            <tr>
              <td>MARSEILLE</td>
              <td>15-03-2025</td>
              <td>JPO MARSEILLE</td>
              <td>Journée portes ouvertes à Marseille</td>
              <td>100</td>
              <td>86</td>
              <td>Yannick</td>
            </tr>
            <tr>
              <td>MARSEILLE</td>
              <td>15-03-2025</td>
              <td>JPO MARSEILLE</td>
              <td>Journée portes ouvertes à Marseille</td>
              <td>100</td>
              <td>86</td>
              <td>Yannick</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="comments-table">
        <h2>Les Commentaires</h2>
        <table>
          <thead>
            <tr>
              <th>De</th>
              <th>Date-comment</th>
              <th>Commentaire</th>
              <th>Réponse-émetteur</th>
              <th>Rep-date</th>
              <th>Rep-comment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="comments-list">Paul Duran</td>
              <td className="comments-list">15-03-2025</td>
              <td className="comments-list">Trés bon accueil, merci !</td>
              <td className="response-list">Alex</td>
              <td className="response-list">16-03-2025</td>
              <td className="response-list">Merci pour votre retour !</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
