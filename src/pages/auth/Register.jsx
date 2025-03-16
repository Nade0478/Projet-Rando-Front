import Container from "react-bootstrap/Container"; 
import RegisterForm from "../../components/RegisterForm";
import Menu from "../../components/Menu";
 
function Register() { 
  return ( 
    <div> 
      <Menu /> 
      <Container fluid className="loginContainer"> 
        <RegisterForm />
      </Container> 
    </div> 
  ); 
} 

export default Register;
