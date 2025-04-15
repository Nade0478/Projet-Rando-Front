import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CardDashboard.css';

function NbrAvisForm() {
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/opinion/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur réseau : ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setOpinions(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des avis :', error);
        setError(error.message);
        setLoading(false);
      });
    }, []);

    const getOpinionCount = () => {
      return opinions.length;
  };

  //   return () => {
  //     // Nettoyage si nécessaire
  //     console.log('Composant démonté');
  //   };
  // }, []);

  return (
    <div className="nbr-avis-container">
      {loading ? (
        <h1>Chargement des données...</h1>
      ) : error ? (
        <h1 className="text-danger">Erreur : {error}</h1>
      ) : (
        <h1>Nombre d'avis : {getOpinionCount()}</h1>
      )}
    </div>
  );
}

export default NbrAvisForm;
