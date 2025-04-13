import React, { useState, useEffect } from 'react'; // Correction : ajout de useEffect
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CardDashboard.css';

const NbrArticleForm = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Récupération des articles depuis une API
    fetch('http://127.0.0.1:8000/api/article/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur réseau : ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setArticles(data))
      .catch(error => console.error('Erreur lors de la récupération des articles :', error));
  }, []); // Utilisation d'un tableau vide pour ne déclencher l'effet qu'une seule fois

  const getArticleCount = () => {
    return articles.length;
  };

  return (
    <div>
      <h1>Nombre d'articles : {getArticleCount()}</h1>
    </div>
  );
};

export default NbrArticleForm;
