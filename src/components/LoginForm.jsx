import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AiOutlineEye, AiTwotoneEyeInvisible } from "react-icons/ai";

function FormLogin() {
  document.title = "Connexion au site";

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues: { email: "", password: "" } });

  const email = watch("email", "");
  const password = watch("password", "");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login/", { email, password });

      if (res.status === 200) {
        // Stocker le token et rediriger vers Profil
        localStorage.setItem("access_token", res.data.token);
        navigate("/profil", { replace: true });
      } else {
        setErrorMessage("Une erreur est survenue lors de la connexion.");
      }
    } catch (err) {
      setErrorMessage("Email ou mot de passe incorrect.");
      console.error("Erreur serveur :", err);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Form onSubmit={handleSubmit(login)}>
      <h3 className="Auth-form-title">Connexion</h3>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="johndoe@unknown.fr"
          {...register("email", { required: "L'email est obligatoire" })}
        />
        {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <i onClick={handleClickShowPassword} style={{ cursor: "pointer" }}>
              {showPassword ? <AiOutlineEye /> : <AiTwotoneEyeInvisible />}
            </i>
          </InputGroup.Text>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            {...register("password", { required: "Le mot de passe est obligatoire" })}
          />
        </InputGroup>
        {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">Se connecter</Button>
      <p className="forgot-password text-right mt-2">
        <button type="button" className="btn btn-link p-0">Mot de passe oublié ?</button>
      </p>
    </Form>
  );
}

export default FormLogin;

