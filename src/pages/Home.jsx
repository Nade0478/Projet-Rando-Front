import React from 'react'; 
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import HomeHead from '../components/home/HomeHead';
import HomeNew from '../components/home/HomeNew';

const Home = () => { 
    return ( 
        <div> 
            <Menu />
            <HomeHead />
            <hr /> {/* Corrected the horizontal rule */}
            <HomeNew />
            <Footer />
        </div> 
    );
}; 

export default Home;
