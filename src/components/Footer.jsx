import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/style-footer.scss"; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#5b3e23', padding: '20px', textAlign: 'center', fontFamily: 'Inknut antiqua' }}>
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ margin: 0 }}>Rando-Ouest</h4>
        <p>Préparez-vous pour l'aventure !</p>
      </div>
      
      <div>
        <h5>Nos coordonnées</h5>
        <p>Email : <a href="mailto:contact@randouest.fr">contact@randouest.fr</a></p>
        <p>Téléphone : +33 6 01 02 03 04</p>
        <p>Adresse : 123 Rue de la Randonnée, 72000 Le Mans, France</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h5>Suivez-nous</h5>
        <div style={{ fontSize: '1.5em', marginTop: '10px' }}>
          <a href="https://www.facebook.com/votre-page" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FaFacebook />
          </a>
          <a href="https://twitter.com/votre-profil" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/votre-compte" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p>
          <a href="/TermsAndConditions" target="_blank" rel="noopener noreferrer">Conditions Générales d'Utilisation</a> | 
          <a href="/PrivacyPolicy" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>Politique de Confidentialité</a>
        </p>
      </div>

      <div style={{ marginTop: '20px', fontSize: '0.9em', color: '#6c757d' }}>
        <p>&copy; 2025 Rando Ouest. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
