import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.js";
import Card from "../components/Card/Card";
import "./profil.css";

export default function Profil() {
  const [user, setUser] = useContext(UserContext);

  return (
    <section className="profil-page">
      <h1 className="profil-title">Bienvenu sur votre profil</h1>
      <div className="profil">
        <div className="profil-identity">
          <p className="profil-tag">
            Nom : <span className="profil-info">{user.nom}</span>
          </p>
          <p className="profil-tag">
            Prénom : <span className="profil-info">{user.prenom}</span>
          </p>
          <p className="profil-tag">
            Role : <span className="profil-info">{user.role}</span>
          </p>
        </div>
        <div className="profil-connection">
          <p className="profil-tag">
            Mail : <span className="profil-info">{user.mail}</span>
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
