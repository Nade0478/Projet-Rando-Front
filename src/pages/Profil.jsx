import React, { useState } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import ModifProfil from "../components/profil/ModifProfil";
import ContactProfil from "../components/profil/ContactProfil";

function Profil() {
  const [userId, setUserId] = useState(null);
  const [name_user, setName_user] = useState(""); 

  return (
    <div>
      <Menu />
      <h1>Bienvenue sur votre profil, {name_user}</h1>
      <ModifProfil userId={userId} setUserId={setUserId} setName_user={setName_user} />
      <ContactProfil />
      <Footer />
    </div>
  );
}

export default Profil;

