import React from 'react';
import NbrUserForm from './NbrUserFrom';
import NbrArticleForm from './NbrArticleForm';
import NbrLieuxForm from './NbrLieuxForm';
import NbrAvisForm from './NbrAvisForm';

const CardDashboard = () => {
  // Données pour chaque carte
  const cards = [
    { title: "Nombre de lieux de randonnées", content: <NbrLieuxForm /> },
    { title: "Nombre d'avis", content: <NbrAvisForm /> },
    { title: "Nombre d'articles", content: <NbrArticleForm /> },
    { title: "Nombre d'utilisateurs", content: <NbrUserForm /> },
  ];

  return (
    <div className="dashboard-container">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-lg-8">
            <div className="card">
              <div className="card-header">
                <h2>{card.title}</h2>
              </div>
              <div className="card-body">
                <p>{card.content}</p>
              </div>
              <div className="card-footer">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDashboard;
