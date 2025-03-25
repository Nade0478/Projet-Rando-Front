import React from "react";

const Nouveautes = () => {
  const items = [
    {
      title: "Esprit locale",
      description: "Nos itinéraires sont conçus pour vous faire découvrir les trésors cachés.",
      image: "local-spirit.jpg"
    },
    {
      title: "Descriptions des parcours",
      description: "Chaque itinéraire est accompagné de descriptions détaillées.",
      image: "path-description.jpg"
    },
    {
      title: "Cartes interactives",
      description: "Accédez à des cartes interactives pour vous guider avec précision.",
      image: "interactive-map.jpg"
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

export default Nouveautes;
