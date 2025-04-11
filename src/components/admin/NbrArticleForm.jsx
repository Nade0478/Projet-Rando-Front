import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CardDashboard.css';

const NbrArticleForm = () => {
    const [articles] = useState([]); 
  
    return (
      <div>
        <h2>Article: {articles.length}</h2>
        <ul>
          {articles.map((article, index) => (
            <li key={index}>{article}</li>
          ))}
        </ul>
      </div>
    );
}
  

export default NbrArticleForm;