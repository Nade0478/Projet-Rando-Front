import React, { useState } from "react"; 
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import axios from "axios"; 
import { useNavigate } from "react-router-dom"; 
import Menu from "../../components/Menu"; 
 
const AddPlace = () => { 
  const navigate = useNavigate(); 
 
  const [namePlace, setNamePlace] = useState(""); 
  const [longitudePlace, setLongitudePlace] = useState(""); 
  const [latitudePlace, setLatitudePlace] = useState(""); 
  const [descriptionPlace, setDescriptionPlace] = useState(""); 
  const [imagePlace, setImagePlace] = useState(""); 
  const [mapPlace, setMapPlace] = useState(""); 
  const [distancePlace, setDistancePlace] = useState(""); 
  const [difficultyPlace, setDifficultyPlace] = useState(""); 
  const [estimatedTimePlace, setEstimatedTimePlace] = useState(""); 
  const [validationError, setValidationError] = useState({}); 
 
  const changeHandler = (place) => { 
    setImagePlace(place.target.files[0]); 
  }; 
 
  const addPlace = async (e) => { 
    e.preventDefault(); 
 
    const formData = new FormData(); 
    formData.append("name_place", namePlace); 
    formData.append("longitude_place", longitudePlace); 
    formData.append("latitude_place", latitudePlace); 
    formData.append("description_place", descriptionPlace); 
    formData.append("image_place", imagePlace); 
    formData.append("map_place", mapPlace); 
    formData.append("distance_place", distancePlace); 
    formData.append("difficulty_place", difficultyPlace); 
    formData.append("estimated_time_place", estimatedTimePlace); 
 
    await axios 
      .post(`http://127.0.0.1:8000/api/place`, formData) 
      .then(() => navigate("/place")) 
      .catch(({ response }) => { 
        if (response.status === 422) { 
          setValidationError(response.data.errors); 
        }  
      }); 
  }; 
 
  return ( 
    <div> 
      <Menu /> 
      <div className="container mt-5"> 
        <div className="row justify-content-center"> 
          <div className="col-12 col-sm-12 col-md-6"> 
            <div className="card"> 
              <div className="card-body"> 
                <h4 className="card-title">Création d'un nouveau lieu de randonnée</h4> 
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
                  <Form onSubmit={addPlace}> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="NamePlace"> 
                          <Form.Label>Nom</Form.Label> 
                          <Form.Control 
                            type="text" 
                            value={namePlace} 
                            onChange={(place) => setNamePlace(place.target.value)} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="LongitudePlace"> 
                          <Form.Label>Longitude</Form.Label> 
                          <Form.Control 
                            type="text" 
                            value={longitudePlace} 
                            onChange={(place) => setLongitudePlace(place.target.value)} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="LatitudePlace"> 
                          <Form.Label>Latitude</Form.Label> 
                          <Form.Control 
                            type="text" 
                            value={latitudePlace} 
                            onChange={(place) => setLatitudePlace(place.target.value)} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="DescriptionPlace"> 
                          <Form.Label>Description</Form.Label> 
                          <Form.Control 
                            type="text" 
                            value={descriptionPlace} 
                            onChange={(place) => setDescriptionPlace(place.target.value)} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="DistancePlace"> 
                          <Form.Label>Distance</Form.Label> 
                          <Form.Control 
                            type="number" 
                            value={distancePlace} 
                            onChange={(place) => setDistancePlace(place.target.value)} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="DifficultyPlace"> 
                          <Form.Label>Difficulté</Form.Label> 
                          <Form.Control 
                            type="text" 
                            value={difficultyPlace} 
                            onChange={(place) => setDifficultyPlace(place.target.value)} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="EstimatedTimePlace"> 
                          <Form.Label>Temps estimé</Form.Label> 
                          <Form.Control 
                            type="text" 
                            value={estimatedTimePlace} 
                            onChange={(place) => setEstimatedTimePlace(place.target.value)} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="MapPlace" className="mb-3"> 
                          <Form.Label>Carte</Form.Label> 
                          <Form.Control 
                            type="url" 
                            value={mapPlace} 
                            onChange={(place) => setMapPlace(place.target.value)} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="ImagePlace" className="mb-3"> 
                          <Form.Label>Image</Form.Label> 
                          <Form.Control 
                            type="file" 
                            onChange={changeHandler} 
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
                      Créer un nouveau lieu 
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
 
export default AddPlace;
