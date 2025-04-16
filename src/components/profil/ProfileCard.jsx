import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const ProfileCard = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/user/${id}`);
        setUser(response.data);
      } catch (err) {
        setError("Erreur lors de la récupération du profil.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchUser();
  }, [id]);
  
  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
        <p>Chargement des informations...</p>
      </div>
    );
  }

  if (error || !user) {
    return <Alert variant="danger">L'utilisateur demandé est introuvable.</Alert>;
  }

  return (
    <div>
      <Menu />
      <div className="container mt-5 d-flex justify-content-center">
        <Card className="shadow-lg p-4" style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title className="text-center">{user.name}</Card.Title>
            <Card.Text>
              <strong>Email :</strong> {user.email} <br />
              <strong>Mot de passe :</strong> {user.password ? user.password : "Non disponible"}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileCard;
