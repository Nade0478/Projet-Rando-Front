import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './HomeNew.css';

const HomeNew = () => {
  const items = [
    {
      title: "Expertise locale",
      description: "Nos itinéraires sont conçus pour vous faire découvrir les trésors cachés.",
      image: "http://127.0.0.1:8000/public/uploads/carte-france.jpg",
    },
    {
      title: "Descriptions des parcours",
      description: "Chaque itinéraire est accompagné de descriptions détaillées.",
      image: "http://127.0.0.1:8000/storage/public/uploads/"
    },
    {
      title: "Cartes intéractives",
      description: "Accéder à des cartes détaillées et interactives pour plannfier vos randonnées avec.",
      image: "http://127.0.0.1:8000/storage/public/uploads"
    },
    
    {
      title: "Cartes interactives",
      image: "http://127.0.0.1:8000/storage/public/uploads",

    },
    {
      title: "Cartes interactives",
      image: "http://127.0.0.1:8000/storage/public/uploads",
      alt: "Cartes interactives"
    },
    {
      title: "Cartes interactives",
      image: "http://127.0.0.1:8000/storage/public/uploads",
      alt: "Cartes interactives"
    }

  ];

  return (
    <section className="nouveautes">
      <h2>Nouveautés</h2>
      <div className="items">
        {items.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button>Découvrir</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeNew;
