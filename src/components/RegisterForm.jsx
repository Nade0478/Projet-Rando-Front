import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineEye, AiTwotoneEyeInvisible } from "react-icons/ai";

function RegisterForm() {
  document.title = "Inscription au site";

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordToggle = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    try {
      // Appel à l'API pour l'inscription
      const response = await axios.post("http://127.0.0.1:8000/api/register", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        const { token, user_role } = response.data.data.access_token;
        localStorage.setItem("access_token", token);

        if (user_role === "user") {
          navigate("/UserProfil", { replace: true });
        } else if (user_role === "admin") {
          navigate("/admin/DashboardPage", { replace: true });
        } else {
          navigate("/home", { replace: true });
        }
      }
    } catch (error) {
      console.error("Erreur serveur :", error.response?.data || error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="Auth-form-title">Créer un compte</h3>

      <Form.Group controlId="formBasicText" className="mb-3">
        <Form.Label>Pseudo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Votre pseudo"
          {...register("name", { required: "Pseudo obligatoire" })}
        />
        {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
      </Form.Group>

      <Form.Group controlId="formBasicEmail" className="mb-3">
        <Form.Label>Adresse mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="johndoe@unknown.fr"
          {...register("email", { required: "Adresse mail obligatoire" })}
        />
        {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
      </Form.Group>

      <Form.Group controlId="formBasicPassword" className="mb-3">
        <Form.Label>Mot de passe</Form.Label>
        <InputGroup>
          <InputGroup.Text onClick={handleShowPasswordToggle} style={{ cursor: "pointer" }}>
            {showPassword ? <AiOutlineEye /> : <AiTwotoneEyeInvisible />}
          </InputGroup.Text>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            {...register("password", {
              required: "Mot de passe obligatoire",
              minLength: { value: 8, message: "Longueur minimale de 8 caractères" },
              pattern: {
                value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                message: "Incluez une minuscule, majuscule, chiffre et caractère spécial",
              },
            })}
          />
        </InputGroup>
        {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
      </Form.Group>

      <Button type="submit" variant="primary">Créer un compte</Button>
    </Form>
  );
}

export default RegisterForm;
