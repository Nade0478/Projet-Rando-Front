import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Profil() {
  const [name_user, setName_user] = useState(""); 
  const [email_user, setEmail_user] = useState(""); 
  const [password_user, setPassword_user] = useState(""); 
  const [validationError, setValidationError] = useState({}); 
  const [message, setMessage] = useState(""); 

  // Récupération des informations utilisateur
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/user", {
          headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
        });

        if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`);

        const data = await res.json();
        setName_user(data.name);
        setEmail_user(data.email);
      } catch (err) {
        console.error("Erreur lors de la récupération des données utilisateur :", err);
      }
    };

    fetchUserData();
  }, []);

  // Validation des champs
  const validateFields = () => {
    const errors = {};

    if (!name_user) errors.name = "Le champ Nom est obligatoire.";
    if (!email_user) {
      errors.email = "Le champ Email est obligatoire.";
    } else if (!/\S+@\S+\.\S+/.test(email_user)) {
      errors.email = "L'adresse email n'est pas valide.";
    }
    if (password_user && password_user.length < 6) {
      errors.password = "Le mot de passe doit comporter au moins 6 caractères.";
    }

    setValidationError(errors);
    return Object.keys(errors).length === 0;
  };

  // Soumission du formulaire pour la mise à jour utilisateur
  const updateUser = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    try {
      const body = {
        name: name_user,
        email: email_user,
      };
      if (password_user) {
        body.password = password_user;
      }

      const res = await fetch("http://127.0.0.1:8000/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`);

      const data = await res.json();
      setMessage("Profil mis à jour avec succès !");
      setValidationError({});
    } catch (err) {
      console.error("Erreur lors de la mise à jour :", err);
      setValidationError({ general: "Une erreur est survenue lors de la mise à jour du profil." });
    }
  };

  return (
    <div>
      <Menu />
      <h1>Bienvenue sur votre profil, {name_user}</h1>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <h2>TU PEUX MODIFIER TON PROFIL</h2>
              <div className="card-body">
                <h4 className="card-title">Modifier les informations</h4>
                <hr />
                {message && <div className="alert alert-success">{message}</div>}
                {Object.keys(validationError).length > 0 && (
                  <div className="alert alert-danger">
                    <ul className="mb-0">
                      {Object.entries(validationError).map(([key, value]) => (
                        <li key={key}>{value}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Form onSubmit={updateUser}>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="name_user">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                          type="text"
                          value={name_user}
                          onChange={(e) => setName_user(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="email_user">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          value={email_user}
                          onChange={(e) => setEmail_user(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="password_user">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Nouveau mot de passe"
                          value={password_user}
                          onChange={(e) => setPassword_user(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    variant="success"
                    className="mt-2 mx-auto d-block" // Bouton centré
                    size="lg"
                    type="submit"
                  >
                    Mettre à jour
                  </Button>
                </Form>
              </div>
            </div>
            <hr />
            <div className="card">
              <h2>DEMANDE DE CONTACT</h2>
              <div className="card-body">
                <h4 className="card-title">Vous allez pouvoir envoyer une demande de contact via ce lien !</h4>
                <hr />
                <Link
                  to="/contact"
                  className="btn btn-success btn-lg mx-auto d-block" // Bouton centré
                >
                  Demande de contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profil;
