import React, { useState, useEffect } from "react"; 
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import axios from "axios"; 
import { useNavigate, useParams } from "react-router-dom"; 
import Sidebar from "../../components/admin/Sidebar";

const EditUser = () => { 
  const { user } = useParams(); 
  const navigate = useNavigate(); 

  const [title_user, setTitle_user] = useState(""); 
  const [content_user, setContent_user] = useState(""); 
  const [note_user, setNote_user] = useState(""); 
  const [userId, setUserId] = useState("");
  const [placeId, setPlaceId] = useState(""); 
  const [validationError, setValidationError] = useState({}); 
  const [users, setUsers] = useState([]); 
  const [places, setPlaces] = useState([]); // Ajout pour les lieux

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/user/${user}`);
        setTitle_user(res.data.title_user);
        setContent_user(res.data.content_user);
        setNote_user(res.data.note_user);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/user");
        setUsers(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      }
    };

    const fetchPlaces = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/place"); // Récupérer les lieux
        setPlaces(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des lieux :", error);
      }
    };

    getUser();
    fetchUsers();
    fetchPlaces();
  }, [user]);

  const updateUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("title_user", title_user);
    formData.append("content_user", content_user);
    formData.append("note_user", note_user);
    formData.append("user_id", parseInt(userId, 10)); 
    formData.append("place_id", parseInt(placeId, 10));

    try {
      await axios.post(`http://127.0.0.1:8000/api/user/${user}`, formData);
      navigate("/user");
    } catch ({ response }) {
      if (response.status === 422) {
        setValidationError(response.data.errors);
      }
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Modifier une opinion</h4>
                <hr />
                <div className="form-wrapper">
                  {Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {Object.entries(validationError).map(([key, value]) => (
                              <li key={key}>{value}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  <Form onSubmit={updateUser}>
                    <Row>
                      <Col>
                        <Form.Group controlId="title_user">
                          <Form.Label>Titre de l'user</Form.Label>
                          <Form.Control
                            type="text"
                            value={title_user}
                            onChange={(user) => setTitle_user(user.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="Content">
                          <Form.Label>Contenu</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            value={content_user}
                            onChange={(user) => setContent_user(user.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="user_id">
                          <Form.Label>Auteur</Form.Label>
                          <Form.Control
                            as="select"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                          >
                            <option value="">Sélectionnez un utilisateur</option>
                            {users.map((user) => (
                              <option key={user.id} value={user.id}>
                                {user.name}
                              </option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="place_id">
                          <Form.Label>Lieux</Form.Label>
                          <Form.Control
                            as="select"
                            value={placeId}
                            onChange={(e) => setPlaceId(e.target.value)}
                          >
                            <option value="">Sélectionnez un endroit</option>
                            {places.map((place) => (
                              <option key={place.id} value={place.id}>
                                {place.name_place}
                              </option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="Note">
                          <Form.Label>Note de 0 à 5</Form.Label>
                          <Form.Control
                            type="number"
                            value={note_user}
                            onChange={(user) => setNote_user(user.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      variant="dark"
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
      </div>
    </div>
  );
};

export default EditUser;

