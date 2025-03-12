import React from 'react'; 
import Menu from '../components/Menu';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';
// import '../styles/style-contact.min.css';
import '../styles/style-contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

 
const Contact = () => { 
    return ( 
        <div> 
            <Menu />
            <h1>Bienvenu sur ma page contact</h1> 
            <p>Pour toute question ou suggestion, n'hésitez pas à me contacter en remplissant le formaulaire de contact</p> 
            <FormContact /> 
            <p>Sinon vous pouvez écrire à mon adresse email : info@example.com</p>
            <Footer/>
        </div> 
    ); 
}; 
 
export default Contact;