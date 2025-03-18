import React from 'react'; 
import { NavLink } from "react-router-dom"; 
import Logo from './Logo';

 
const Navbar = () => { 
    return ( 
        <div className='navigation'> 
            <ul> 
                <Logo />
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} > 
                    <li>Accueil</li> 
                </NavLink> 
                <NavLink to="/blog" className={(nav) => (nav.isActive ? "nav-active" : "")} > 
                    <li>Mon blog</li> 
                </NavLink> 
                <NavLink to="/contact" className={(nav) => (nav.isActive? "nav-active" : "")} > 
                    <li>Contact</li> 
                </NavLink>
                <NavLink to="/place" className={(nav) => (nav.isActive? "nav-active" : "")} > 
                    <li>Les chemins de randonnées</li> 
                </NavLink>
                <NavLink to="/login" className={(nav) => (nav.isActive? "nav-active" : "")} > 
                    <li>Connexion</li> 
                </NavLink>
                <NavLink to="/register" className={(nav) => (nav.isActive? "nav-active" : "")} > 
                    <li>Inscription</li> 
                </NavLink>
                <NavLink to="/logout" className={(nav) => (nav.isActive? "nav-active" : "")} > 
                    <li>Déconnexion</li> 
                </NavLink>
            </ul> 
        </div> 
    ); 
}; 
 
export default Navbar;