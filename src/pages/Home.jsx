import React from 'react'; 
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
 
const Home = () => { 
    return ( 
        <div> 
            <Menu />
            <h1>Bienvenu sur la page d'accueil</h1> 
            <Carousel />
            <Footer />
        </div> 
    );
}; 
 
export default Home; 