import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./HomeNew.css";
import { Link } from "react-router-dom";

const HomeNewArticle = () => {
  const items = [
    {
      title: "Expertise locale",
      description: "Nos itinéraires sont conçus pour vous faire découvrir les trésors cachés.",
      image: "http://127.0.0.1:8000/storage/public/uploads/cartes-trésor.png",
    },
    {
      title: "Descriptions des parcours",
      description: "Chaque itinéraire est accompagné de descriptions détaillées.",
      image: "http://127.0.0.1:8000/storage/public/uploads/Site-historique.jpg",
    },
    {
      title: "Cartes interactives",
      description: "Accédez à des cartes détaillées et interactives pour planifier vos randonnées.",
      image: "http://127.0.0.1:8000/storage/public/uploads/carte-randonnée.png",
    },
  ];

  return (
    <section className="homeNewArticle">
      <h3 className="text-center">ARTICLES</h3>
      <div className="items">
        {items.map((item, index) => (
          <div key={index} className="item">
            <div className="image-container">
              <img src={item.image} alt={item.title} />
            </div>
            <h3 className="item-title">{item.title}</h3>
            <p>{item.description}</p>
            <Link to={`/blog`} className="btn btn-light">
              Découvrir
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeNewArticle;
