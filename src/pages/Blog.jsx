import React from 'react'; 
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { Card } from 'react-bootstrap';
 
const Blog = () => { 
    return ( 
        <div> 
            <Menu />
            <h1>Bienvenu sur mon blog</h1> 
            <p>Cette page contient des articles de blog</p>
            <p>Vous pouvez consulter les articles en cliquant sur les titres de chaque article.</p>
            <p>Pour poster un nouvel article, vous pouvez remplir le formulaire ci-dessous.</p>
                <Card />
                <Card />
                <Card />
                <Card />
            <Footer />
        </div> 
    ); 
}; 

export default Blog;