import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import ModifProfil from "../components/profil/ModifProfil";
import ContactProfil from "../components/profil/ContactProfil";
import axios from "axios";

function Profil() {
  const [userId, setUserId] = useState(null);
  const [name_user, setName_user] = useState(""); 
  const [user, setUser] = useState(null);
  const [email_user, setEmail_user] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
      getCurrentUser(); 
  }, []);

  const getCurrentUser = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/currentuser",
        { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } }
      );
      setUser(response.data.user);
      setUserId(response.data.user.id);
      setName_user(response.data.user.name);
      setEmail_user(response.data.user.email);
    
    } catch (error) {
      console.error("Erreur lors de la récupération des rôles :", error);
    }
  };

  return (
    <div>
      <Menu />
      <h1>Bienvenue sur votre profil, {name_user}</h1>
      <ModifProfil userId={userId} name_user={name_user} email_user={email_user} />
      <ContactProfil />
      <Footer />
    </div>
  );
}

export default Profil;

