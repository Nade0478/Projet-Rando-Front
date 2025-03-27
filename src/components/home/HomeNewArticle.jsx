import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './HomeNew.css';

const HomeNewArticle = () => {
  const items = [
    {
      title: "Expertise locale",
      description: "Nos itinéraires sont conçus pour vous faire découvrir les trésors cachés.",
      image: "http://127.0.0.1:8000/storage/public/uploads/CheminForet_1742477581.png",
    },
    {
      title: "Descriptions des parcours",
      description: "Chaque itinéraire est accompagné de descriptions détaillées.",
      image: "http://127.0.0.1:8000/storage/public/uploads/Foret-becon49_1742478307.jpg"
    },
    {
      title: "Cartes intéractives",
      description: "Accéder à des cartes détaillées et interactives pour plannfier vos randonnées avec.",
      image: "http://127.0.0.1:8000/storage/public/uploads/cité-plantagenet72_1743030321.jpg"
    },

  ];

  return (
    <section className="nouveautes">
      <h3>ARTICLES</h3>
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

export default HomeNewArticle;
