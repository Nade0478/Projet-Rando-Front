import React, { useState } from "react"; 
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import axios from "axios"; 
import { useNavigate } from "react-router-dom"; 
import Menu from "../../components/Menu"; 
 
const AddOpinion = () => { 
  const navigate = useNavigate(); 
 
  const [title_opinion, setTitle_opinion] = useState(""); 
  const [content_opinion, setContent_opinion] = useState(""); 
  const [note_opinion, setNote_opinion] = useState(""); 
  const [user_id, setUser_id] = useState(""); 
  const [place_id, setPlace_id] = useState(""); 
  const [validationError, setValidationError] = useState({}); 
 
  // Fonction d'ajout d'opinion
  const addOpinion = async (e) => { 
    e.preventDefault(); 
 
    const formData = new FormData(); 
 
    formData.append("title_opinion", title_opinion); 
    formData.append("content_opinion", content_opinion); 
    formData.append("note_opinion", note_opinion); 
    formData.append("user_id", user_id);
    formData.append("place_id", place_id);
 
    await axios 
      .post(`http://127.0.0.1:8000/api/opinion`, formData) 
      .then(() => navigate('/opinion')) 
      .catch(({ response }) => { 
        if (response.status === 422) { 
          setValidationError(response.data.errors); 
        }  
      }); 
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
                            {Object.entries(validationError).map( 
                              ([key, value]) => ( 
                                <li key={key}>{value}</li> 
                              ) 
                            )} 
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
                            onChange={(opinion) => { 
                              setTitle_opinion(opinion.target.value); 
                            }} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="Content"> 
                          <Form.Label>Contenu</Form.Label> 
                          <Form.Control 
                            type="text" 
                            value={content_opinion} 
                            onChange={(opinion) => { 
                              setContent_opinion(opinion.target.value); 
                            }} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row> 
                    <Row>
                      <Col> 
                        <Form.Group controlId="User_id"> 
                          <Form.Label>Auteur</Form.Label> 
                          <Form.Control 
                            type="number" 
                            value={user_id} 
                            onChange={(opinion) => { 
                              setUser_id(opinion.target.value); 
                            }} 
                          /> 
                        </Form.Group> 
                      </Col>
                    </Row>
                    <Row>
                      <Col> 
                        <Form.Group controlId="Place_id"> 
                          <Form.Label>Lieux</Form.Label> 
                          <Form.Control 
                            type="number" 
                            value={place_id} 
                            onChange={(opinion) => { 
                              setPlace_id(opinion.target.value); 
                            }} 
                          /> 
                        </Form.Group> 
                      </Col>
                    </Row>
                    <Row> 
                      <Col> 
                        <Form.Group controlId="Note"> 
                          <Form.Label>Note</Form.Label> 
                          <Form.Control 
                            type="number" 
                            value={note_opinion} 
                            onChange={(opinion) => { 
                              setNote_opinion(opinion.target.value); 
                            }} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row>
                    <Button 
                      variant="primary" 
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
    </div> 
  ); 
}; 
 
export default AddOpinion;
