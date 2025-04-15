import React, { useState, useEffect } from 'react'; // Import correct
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CardDashboard.css';

function NbrArticleForm() {
  const [articles, setArticles] = useState([]); // État pour stocker les articles
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  useEffect(() => {
    // Récupération des articles depuis l'API
    fetch('http://127.0.0.1:8000/api/article/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur réseau : ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setArticles(data); // Mise à jour des articles
        setLoading(false); // Fin du chargement
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des articles :', error);
        setError(error.message); // Capture du message d'erreur
        setLoading(false); // Fin du chargement même en cas d'erreur
      });
  }, []); // Dépendances vides : l'effet s'exécute uniquement au montage

  const getArticleCount = () => {
    return articles.length;
  };

  return (
    <div className="nbr-article-container">
      {loading ? (
        <h1>Chargement des données...</h1>
      ) : error ? (
        <h1 className="text-danger">Erreur : {error}</h1>
      ) : (
        <h1>Nombre d'articles : {getArticleCount()}</h1>
      )}
    </div>
  );
}

export default NbrArticleForm;

