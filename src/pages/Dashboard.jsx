import React from 'react';
import emailjs from 'emailjs-com';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dashboard from '../components/admin/Dashboard';
import { Navbar } from 'react-bootstrap';
import Footer from '../components/Footer';

const DashboardPage = () => {
  const sendEmail = () => {
    emailjs.send(/* paramètres pour envoyer un email */)
      .then((response) => {
        console.log('Email envoyé avec succès !', response);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
      });
  };

  return (
    <div className="container">
      <Navbar />
      {/* <h1>Bienvenue sur ma page de l'administrateur</h1> */}
      <hr />
      <Dashboard />
      <h2>Messagerie</h2>
      <button onClick={sendEmail}>Envoyer un email</button>
    </div>
  );
};
<Footer />

export default DashboardPage;

