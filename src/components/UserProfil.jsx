import React from 'react';
import '../styles/style-userprofil.css';



// Composant fonctionnel pour afficher les informations de l'utilisateur
const UserPage = ({ user }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Profil de l'utilisateur</h1>
      <div style={styles.info}>
        <p><strong>Nom:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};


// Exemple d'utilisation du composant avec des données fictives
const UserProfil = () => {
  const user = {
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
  };

  return (
    <div>
      <UserPage user={user} />
    </div>
  );
};

export default UserProfil;
