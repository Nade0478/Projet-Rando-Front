import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './HomeNew.css';
import { Link } from "react-router-dom";

const HomeNewPlace = () => {
  const items = [
    
    {
      title: "Cartes interactives",
      image: "http://127.0.0.1:8000/storage/public/uploads/cite-plantagenet72.jpg",

    },
    {
      title: "Cartes interactives",
      image: "http://127.0.0.1:8000/storage/public/uploads/GR34-Bretagne.jpg",
      alt: "Cartes interactives"
    },
    {
      title: "Cartes interactives",
      image: "http://127.0.0.1:8000/storage/public/uploads/Vallee-Blavet56.jpg",
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
            <Link
              to={`/place/page`} 
              className="btn btn-light me-2"
            >
              Découvrir
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeNewPlace;
