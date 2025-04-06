import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const ShowUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user/${id}`);
    console.log("Données récupérées :", response.data); // Debugging
    setUser(response.data);
    setLoading(false);
  } catch (error) {
    console.error("Erreur lors de la récupération des détails :", error);
    setLoading(false);
  }
};

  if (loading) {
    return <p>Chargement des informations...</p>;
  }

  if (!user) {
    return <p>L'utilisateur demandé est introuvable.</p>;
  }

  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <h1>{user.name}</h1>
        <p><strong>Nom :</strong> {user.name}</p>
        <p><strong>E-mail :</strong> {user.email}</p>
        <p><strong>Password :</strong> {user.password ? user.password : "Mot de passe non disponible"}</p>
      </div>
      <Footer />
    </div>
  );
};

export default ShowUser;
