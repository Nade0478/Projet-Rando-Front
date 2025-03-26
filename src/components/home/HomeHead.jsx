import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap';
import './HomeHead.css';

const HomeHead = () => {
  return (
    <section
      className="presentation"
      style={{ backgroundImage: `url('/public/uploads/nature1')` }}
    >
      <div className="container">
      <h1>Bienvenue sur la page d'accueil de Rando-Ouest</h1>
      <p>
          Le site dédié aux amateurs de randonnée et d’activités en plein air.
        </p>
        <div className="left-side"><p>
          RandoOuest est votre guide ultime pour découvrir les sentiers
          de randonnée pédestre les plus beaux et variés du Grand Ouest
          de la France. Que vous soyez novice ou expérimenté, notre site
          vous propose des itinéraires adaptés, des conseils pratiques
          et une communauté de passionnés.</p></div>
        
          
          <div className="right-side">
          <p>
          Commencez votre exploration dès aujourd'hui avec RandoOuest. Que vous
          soyez en quête de randonnées en famille, de défis sportifs ou de moments
          de détente en pleine nature, notre site a tout ce qu'il vous faut
          pour organiser votre prochaine sortie.
        </p>
            </div>  
         
        <form>
          <article>
            <p>
              Inscrivez-vous pour recevoir nos itinéraires et conseils exclusifs.
            </p>
          </article>
        </form>
      </div>
    </section>
  );
};

export default HomeHead;
