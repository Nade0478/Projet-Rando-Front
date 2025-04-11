import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CardDashboard.css';


const NbrAvisForm = () => {
    const [opinions] = useState([]);
  
  
    return (
      <div>
        <h2>Avis: {opinions.length}</h2>
        <ul>
          {opinions.map((opinion, index) => (
            <li key={index}>{opinion}</li>
          ))}
        </ul>
      </div>
    );
  };
  

export default NbrAvisForm;