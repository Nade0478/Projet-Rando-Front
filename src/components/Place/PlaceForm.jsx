import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../components/home/HomeNew.css';


const PlaceForm = () => {
    const items = [
    
        {
          title: "Alpes Mancelles",
          image: "http://127.0.0.1:8000/storage/public/uploads/alpes-mancelle72_1742481051.jpg",
          alt: "Alpes Mancelles",
    
        },
        {
          title: "Circuit des vignes",
          image: "http://127.0.0.1:8000/storage/public/uploads/circuit-des-vignes72_1743030460.jpg",
          alt: "Circuit des vignes"
        },
        {
          title: "Vallée Ernée",
          image: "http://127.0.0.1:8000/storage/public/uploads/vallée-ernée49_1742477785.jpg",
          alt: "Vallée Ernée"
        }
    
      ];
    
      return (
        <section className="nouveautes">
          <h3>SITE DE RANDONNES VEDETTES</h3>
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

export default PlaceForm;
