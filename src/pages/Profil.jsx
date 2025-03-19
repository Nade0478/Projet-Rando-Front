import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap"; // Ajout du bouton si oublié
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function Profil() {
  const [name_user, setName_user] = useState(""); // Champ pour "nom"
  const [email_user, setEmail_user] = useState(""); // Champ pour "email"
  const [password_user, setPassword_user] = useState(""); // Champ pour "mot de passe"
  const [validationError, setValidationError] = useState({}); // Gestion des erreurs de validation
  const [message, setMessage] = useState(""); // Message de confirmation

  // Récupération des informations utilisateur
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/user", {
          headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
        });
        const data = await res.json();

        if (res.ok) {
          setName_user(data.name); // Initialiser le formulaire avec les données utilisateur
          setEmail_user(data.email);
        } else {
          console.error("Erreur lors de la récupération des données utilisateur :", data.message);
        }
      } catch (err) {
        console.error("Erreur réseau :", err);
      }
    };

    fetchUserData();
  }, []);

  // Soumission du formulaire pour la mise à jour utilisateur
  const updateUser = async (e) => {
    e.preventDefault();

    // Validation côté client
    if (!name_user || !email_user) {
      setValidationError({ general: "Les champs Nom et Email sont obligatoires." });
      return;
    }

    try {
      // Construire le corps de la requête sans inclure les champs vides
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

      const data = await res.json();

      if (res.ok) {
        setMessage("Profil mis à jour avec succès !");
        setValidationError({});
      } else {
        console.error("Erreur lors de la mise à jour :", data.errors || {});
        setValidationError(data.errors || {});
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
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
                    variant="warning"
                    className="mt-2"
                    size="lg"
                    block="block"
                    type="submit"
                  >
                    Mettre à jour
                  </Button>
                </Form>
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
