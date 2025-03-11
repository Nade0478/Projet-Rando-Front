import React from "react"; 
import Button from "react-bootstrap/Button"; 
import Form from "react-bootstrap/Form"; 
import InputGroup from "react-bootstrap/InputGroup"; 
import { useState } from "react"; 
import { useForm } from "react-hook-form"; 
import { useNavigate } from "react-router-dom"; 
import axios from "axios"; 
import { AiOutlineEye, AiTwotoneEyeInvisible } from "react-icons/ai"; 

function RegisterForm() { 
  document.title = "Inscription au site"; 

  let navigate = useNavigate(); 

  const { 
    register, 
    watch, 
    handleSubmit, 
    formState: { errors }, 
  } = useForm({ mode: "onChange" }); 

  const email = watch("email", ""); 
  const password = watch("password", ""); 
  const name = watch("name", ""); 

  const [showPassword, setShowPassword] = useState(false); 

  const onSubmit = (data) => { 
    registerForm(); 
  }; 

  const registerForm = async () => { 
    try { 
      const formData = new FormData(); 
      formData.append("email", email); 
      formData.append("password", password); 
      formData.append("name", name);
      const res = await axios.post( 
        "http://127.0.0.1:8000/api/register/", 
        formData, 
        { 
          headers: { "Content-Type": "multipart/form-data" }, 
        } 
      ); 
      if (res.status === 200) { 
        localStorage.setItem("access_token", res.data.token); 
        navigate("/", { replace: true }); 
      } else { 
        console.log("Une erreur est survenue");
      } 
    } catch (err) { 
      console.log(err); 
    } 
  }; 

  const handleClickShowPassword = () => { 
    setShowPassword((prevShowPassword) => !prevShowPassword); 
  }; 

  return ( 
    <Form onSubmit={handleSubmit(onSubmit)}> 
      <h3 className="Auth-form-title">Créer un compte</h3> 

      <Form.Group className="mb-3" controlId="formBasicText"> 
        <Form.Label>Pseudo</Form.Label> 
        <Form.Control 
          type="text" 
          placeholder="Votre pseudo" 
          {...register("name", { required: "Pseudo obligatoire" })} 
        /> 
        {errors.name && ( 
          <Form.Text className="text-danger">{errors.name.message}</Form.Text> 
        )} 
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicEmail"> 
        <Form.Label>Adresse mail</Form.Label> 
        <Form.Control 
          type="email" 
          placeholder="johndoe@unknown.fr" 
          {...register("email", { required: "Adresse mail obligatoire" })} 
        />
        {errors.email && ( 
          <Form.Text className="text-danger">{errors.email.message}</Form.Text> 
        )} 
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicPassword"> 
        <Form.Label>Mot de passe</Form.Label> 
        <InputGroup> 
          <InputGroup.Text> 
            <i onClick={handleClickShowPassword}> 
              {showPassword ? <AiOutlineEye /> : <AiTwotoneEyeInvisible />} 
            </i> 
          </InputGroup.Text> 
          <Form.Control 
            type={showPassword ? "text" : "password"} 
            placeholder="Mot de passe" 
            {...register("password", { 
              required: "Mot de passe est obligatoire", 
              minLength: { 
                value: 8, 
                message: "Longueur minimale de 8 caractères", 
              }, 
              pattern: { 
                value: 
                  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#:$%^&])/, 
                message: 
                  "Le mot de passe doit contenir une minuscule, une majuscule, un chiffre et un caractère spéciale", 
              }, 
            })} 
          /> 
        </InputGroup> 
        {errors.password && ( 
          <Form.Text className="text-danger"> 
            {errors.password.message} 
          </Form.Text> 
        )} 
      </Form.Group> 

      <Button variant="primary" type="submit"> 
        Créer un compte 
      </Button> 
    </Form> 
  ); 
} 

export default RegisterForm;