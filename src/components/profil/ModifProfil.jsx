import React, { useState, useEffect, useCallback } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ModifProfil = ({ setUserId, setName_user }) => {
  const [userId, setLocalUserId] = useState(null); // Correction ici
  const [name_user, setLocalNameUser] = useState("");
  const [email_user, setEmail_user] = useState("");
  const [password_user, setPassword_user] = useState("");
  const [validationError, setValidationError] = useState({});
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Optimisation avec useCallback pour éviter des recréations inutiles
  const fetchUserData = useCallback(async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`);

      const data = await res.json();
      console.log("Données utilisateur :", data);

      if (data && data.id) {
        setLocalUserId(data.id);
        setUserId(data.id); // Met à jour l’ID dans le parent `Profil.js`
        setLocalNameUser(data.name);
        setName_user(data.name); // Met à jour le parent `Profil.js`
        setEmail_user(data.email);
      }
    } catch (err) {
      console.error(
        "Erreur lors de la récupération des données utilisateur :",
        err
      );
    }
  }, [setUserId, setName_user]); // Correction ici

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]); // Correction ici

  const updateUser = async (e) => {
    e.preventDefault();
    if (!userId) {
      setValidationError({ general: "ID utilisateur introuvable." });
      return;
    }

    try {
      const body = { name: name_user, email: email_user };
      if (password_user) {
        body.password = password_user;
      }

      const res = await fetch(`http://127.0.0.1:8000/api/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({ name: name_user, email: email_user, password: password_user }),
      });      

      if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`);

      setMessage("Profil mis à jour avec succès !");
      setValidationError({});
      navigate("/profile");
    } catch (err) {
      console.error("Erreur lors de la mise à jour :", err);
      setValidationError({
        general: "Une erreur est survenue lors de la mise à jour du profil.",
      });
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
                      value={name_user}
                      onChange={(e) => setName_user(e.target.value)}
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
                      value={email_user}
                      onChange={(e) => setEmail_user(e.target.value)}
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
                      value={password_user}
                      onChange={(e) => setPassword_user(e.target.value)}
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
