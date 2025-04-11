import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CardDashboard.css';


const NbrLieuxForm = () => {
    const [places] = useState([]);
  
  
    return (
      <div>
        <h2>Lieux: {places.length}</h2>
        <ul>
          {places.map((place, index) => (
            <li key={index}>{place}</li>
          ))}
        </ul>
      </div>
    );
  };
  

export default NbrLieuxForm;