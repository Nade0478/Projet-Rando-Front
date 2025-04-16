import React from 'react';
import { Link } from 'react-router-dom';
import '../admin/Sidebar.css'; 
import Logo from '../Logo';


const SidebarProfil = () => {
  return (
    <div className="sidebar">
    <Logo />
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <hr />
        <hr />
        <li><Link to="/login"><strong><em>Se connecter</em></strong></Link></li>
        <li><Link to="/logout"><strong><em>Déconnexion</em></strong></Link></li>

      </ul>
    </div>
  );
};

export default SidebarProfil;
