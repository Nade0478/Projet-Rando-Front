import React, { useState, useEffect } from 'react'; // Import correct de useEffect
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CardDashboard.css';

const NbrAvisForm = () => {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    // Récupération des avis depuis une API
    fetch('http://127.0.0.1:8000/api/opinion/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur réseau : ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setOpinions(data))
      .catch(error => console.error('Erreur lors de la récupération des avis :', error));
  }, []); // Tableau de dépendances vide pour exécuter l'effet uniquement au montage

  const getOpinionCount = () => {
    return opinions.length;
  };

  return (
    <div>
      <h1>Nombre de lieux de randonnées : {getOpinionCount()}</h1>
    </div>
  );
};

export default NbrAvisForm;
