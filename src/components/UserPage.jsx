import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const UserPage = ({ handleLogout, nameUser, email }) => {
  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <h2>Bienvenue sur votre page profil utilisateur, {nameUser} !</h2>
        <div className="user-info mt-4">
          <h4>Informations utilisateur :</h4>
          <p><strong>Nom :</strong> {nameUser}</p>
          <p><strong>Email :</strong> {email}</p>
        </div>
        <div className="actions mt-4">
          <button onClick={handleLogout} className="btn btn-danger">
            Se déconnecter
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserPage;

