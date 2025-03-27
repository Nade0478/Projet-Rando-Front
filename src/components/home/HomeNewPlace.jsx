import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './HomeNew.css';

const HomeNewPlace = () => {
  const items = [
    
    {
      title: "Cartes interactives",
      image: "http://127.0.0.1:8000/storage/public/uploads/alpes-mancelle72_1742481051.jpg",

    },
    {
      title: "Cartes interactives",
      image: "http://127.0.0.1:8000/storage/public/uploads/circuit-des-vignes72_1743030460.jpg",
      alt: "Cartes interactives"
    },
    {
      title: "Cartes interactives",
      image: "http://127.0.0.1:8000/storage/public/uploads/vallée-ernée49_1742477785.jpg",
      alt: "Cartes interactives"
    }

  ];

  return (
    <section className="nouveautes">
      <h3>SITE DE RANDONNES</h3>
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

export default HomeNewPlace;
