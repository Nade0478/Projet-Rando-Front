import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ModifProfil = ({ id_user, name_user, email_user }) => {
  const [name, setName] = useState(name_user);
  const [email, setEmail] = useState(email_user);
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState({});
  const [message] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setName(name_user);
    setEmail(email_user);
  }, [name_user, email_user]);

  const updateUser = async (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("name", name);
    formData.append("email", email);
    if (password) {
      formData.append("password", password);
    }

    // Vérifiez le contenu de formData
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    try {
      await axios.post(`http://127.0.0.1:8000/api/user/${id_user}`, formData);
      navigate("/profil");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setValidationError(error.response.data.errors);
      } else {
        console.error("Erreur inattendue :", error);
      }
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <h2>Modifier votre profil</h2>
          <div className="card-body">
            {message && <div className="alert alert-success">{message}</div>}
            {Object.keys(validationError).length > 0 && (
              <div className="alert alert-danger">
                <ul>
                  {Object.entries(validationError).map(([key, value]) => (
                    <li key={key}>{value}</li>
                  ))}
                </ul>
              </div>
            )}
            <Form onSubmit={updateUser}>
              <Row>
                <Col>
                  <Form.Group controlId="name_user">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="email_user">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="password_user">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Nouveau mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button type="submit" className="btn btn-success">
                Mettre à jour
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifProfil;

