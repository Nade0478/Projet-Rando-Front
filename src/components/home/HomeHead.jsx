import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./HomeHead.css";

const HomeHead = () => {
  return (
    <section
      className="presentation"
      style={{ backgroundImage: `url('http://127.0.0.1:8000/storage/public/uploads/alpes-mancelle72_1742481051.jpg')` }}
    >
      <div className="container">
        <h1>Bienvenue sur la page d'accueil de Rando-Ouest</h1>
        <div className="row">
          <div className="col-md-6 left-side">
            <p>
              Rando-Ouest est votre guide ultime pour découvrir les sentiers de
              randonnée pédestre les plus beaux et variés du Grand Ouest de la
              France. Que vous soyez novice ou expérimenté, notre site vous
              propose des itinéraires adaptés, des conseils pratiques et une
              communauté de passionnés.
            </p>
          </div>

          <div className="col-md-6 right-side">
            <p>
              Commencez votre exploration dès aujourd'hui avec RandoOuest. Que
              vous soyez en quête de randonnées en famille, de défis sportifs ou
              de moments de détente en pleine nature, notre site a tout ce qu'il
              vous faut pour organiser votre prochaine sortie.
            </p>
          </div>
        </div>

        {/* <form>
          <article>
            <p>
              Inscrivez-vous pour recevoir nos itinéraires et conseils
              exclusifs.
            </p>
            <label htmlFor="email">Votre e-mail :</label>
            <input type="email" id="email" name="email" placeholder="Entrez votre e-mail" required />
            <button type="submit">S'inscrire</button>
          </article>
        </form> */}
      </div>
    </section>
  );
};

export default HomeHead;

