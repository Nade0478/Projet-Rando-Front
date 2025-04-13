import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CardDashboard.css';

function NbrLieuxForm() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Récupération des utilisateurs depuis une API
    fetch('http://127.0.0.1:8000/api/place/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur réseau : ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setPlaces(data))
      .catch(error => console.error('Erreur lors de la récupération des endroits :', error));
  }, []);

  const getPlaceCount = () => {
    return places.length;
  };

  return (
    <div>
      <h1>Nombre de lieux de randonnées : {getPlaceCount()}</h1>
    </div>
  );
};

export default NbrLieuxForm;
