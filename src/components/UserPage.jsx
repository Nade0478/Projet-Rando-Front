import React from "react";

const UserPage = ({ handleLogout }) => {
  return (
    <div>
      <h2>Bienvenue sur votre tableau utilisateur</h2>
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
};

export default UserPage;
