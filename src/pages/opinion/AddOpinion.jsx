import React, { useState, useEffect } from "react"; 
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import axios from "axios"; 
import { useNavigate } from "react-router-dom"; 
import Menu from "../../components/Menu"; 
import Footer from "../../components/Footer";

const AddOpinion = () => { 
  const navigate = useNavigate(); 

  const [title_opinion, setTitle_opinion] = useState(""); 
  const [content_opinion, setContent_opinion] = useState(""); 
  const [note_opinion, setNote_opinion] = useState(""); 
  const [userId, setUserId] = useState("");
  const [placeId, setPlaceId] = useState(""); 
  const [validationError, setValidationError] = useState({}); 
  const [users, setUsers] = useState([]); 
  const [places, setPlaces] = useState([]); 

  // Récupération des utilisateurs et des lieux
  useEffect(() => {
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
        const response = await axios.get("http://127.0.0.1:8000/api/place");
        setPlaces(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des lieux :", error);
      }
    };

    fetchUsers();
    fetchPlaces();
  }, []);

  // Fonction d'ajout d'opinion
  const addOpinion = async (e) => { 
    e.preventDefault(); 

    const formData = new FormData(); 

    formData.append("title_opinion", title_opinion); 
    formData.append("content_opinion", content_opinion); 
    formData.append("note_opinion", note_opinion); 
    formData.append("user_id", parseInt(userId, 10)); // Conversion en entier
    formData.append("place_id", parseInt(placeId, 10)); // Conversion en entier

    try {
      await axios.post(`http://127.0.0.1:8000/api/opinion`, formData);
      navigate('/opinion');
    } catch ({ response }) {
      if (response.status === 422) {
        setValidationError(response.data.errors);
      }
    }
  };

  return ( 
    <div> 
      <Menu /> 
      <div className="container"> 
        <div className="row justify-content-center"> 
          <div className="col-12 col-sm-12 col-md-6"> 
            <div className="card"> 
              <div className="card-body"> 
                <h4 className="card-title">Création d'une nouvelle opinion</h4> 
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
                  <Form onSubmit={addOpinion}> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="title_opinion"> 
                          <Form.Label>Titre de l'opinion</Form.Label> 
                          <Form.Control 
                            type="text" 
                            value={title_opinion} 
                            onChange={(e) => setTitle_opinion(e.target.value)} 
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
                            value={content_opinion} 
                            onChange={(e) => setContent_opinion(e.target.value)} 
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
                            value={note_opinion} 
                            onChange={(e) => setNote_opinion(e.target.value)} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row>
                    <Button 
                      variant="success" 
                      className="mt-2" 
                      size="lg" 
                      block="block" 
                      type="submit" 
                    > 
                      Créer 
                    </Button> 
                  </Form> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
      <Footer />
    </div> 
  ); 
}; 
 
export default AddOpinion;
