import React, { useState, useEffect } from "react"; 
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import axios from "axios"; 
import { useNavigate, useParams } from "react-router-dom"; 
import Menu from "../../components/Menu"; 
 
const EditPlace = () => { 
  const { place } = useParams(); 
  const navigate = useNavigate(); 
 
  const [namePlace, setNamePlace] = useState(""); 
  const [longitudePlace, setLongitudePlace] = useState(""); 
  const [latitudePlace, setLatitudePlace] = useState(""); 
  const [descriptionPlace, setDescriptionPlace] = useState(""); 
  const [imagePlace, setImagePlace] = useState(null); 
  const [mapPlace, setMapPlace] = useState(""); 
  const [distancePlace, setDistancePlace] = useState(""); 
  const [difficultyPlace, setDifficultyPlace] = useState(""); 
  const [estimatedTimePlace, setEstimatedTimePlace] = useState(""); 
  const [validationError, setValidationError] = useState({}); 
 
  useEffect(() => { 
    getPlace(); 
  }, []); 
 
  // GET - Récupère les informations du lieu avec l'API 
  const getPlace = async () => { 
    await axios 
      .get(`http://127.0.0.1:8000/api/place/${place}`) 
      .then((res) => { 
        setNamePlace(res.data.name_place); 
        setLongitudePlace(res.data.longitude_place); 
        setLatitudePlace(res.data.latitude_place); 
        setDescriptionPlace(res.data.description_place); 
        setMapPlace(res.data.map_place); 
        setDistancePlace(res.data.distance_place); 
        setDifficultyPlace(res.data.difficulty_place); 
        setEstimatedTimePlace(res.data.estimated_time_place); 
      }) 
      .catch((error) => { 
        console.log(error); 
      }); 
  }; 
 
  const changeHandler = (place) => { 
    setImagePlace(place.target.files[0]); 
  }; 
 
  // Fonction de mise à jour du lieu 
  const updatePlace = async (e) => { 
    e.preventDefault(); 
 
    const formData = new FormData(); 
    formData.append("_method", "PATCH"); 
    formData.append("name_place", namePlace); 
    formData.append("longitude_place", longitudePlace); 
    formData.append("latitude_place", latitudePlace); 
    formData.append("description_place", descriptionPlace); 
    formData.append("map_place", mapPlace); 
    formData.append("distance_place", distancePlace); 
    formData.append("difficulty_place", difficultyPlace); 
    formData.append("estimated_time_place", estimatedTimePlace); 
    if (imagePlace !== null) { 
      formData.append("image_place", imagePlace); 
    } 
 
    await axios 
      .post(`http://127.0.0.1:8000/api/place/${place}`, formData) 
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
                <h4 className="card-title">Modifier un lieu de randonnée</h4> 
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
                  <Form onSubmit={updatePlace}> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="Name"> 
                          <Form.Label>Nom du lieu</Form.Label> 
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
                        <Form.Group controlId="Longitude"> 
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
                        <Form.Group controlId="Latitude"> 
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
                        <Form.Group controlId="Description"> 
                          <Form.Label>Description</Form.Label> 
                          <Form.Control 
                            as="textarea" 
                            rows={5} 
                            value={descriptionPlace} 
                            onChange={(place) => setDescriptionPlace(place.target.value)} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="Map"> 
                          <Form.Label>Carte</Form.Label> 
                          <Form.Control 
                            type="text" 
                            value={mapPlace} 
                            onChange={(place) => setMapPlace(place.target.value)} 
                          /> 
                        </Form.Group> 
                      </Col> 
                    </Row> 
                    <Row> 
                      <Col> 
                        <Form.Group controlId="Distance"> 
                          <Form.Label>Distance (km)</Form.Label> 
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
                        <Form.Group controlId="Difficulty"> 
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
                        <Form.Group controlId="EstimatedTime"> 
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
                        <Form.Group controlId="Image" className="mb-3"> 
                          <Form.Label>Image</Form.Label> 
                          <Form.Control type="file" onChange={changeHandler} /> 
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
 
export default EditPlace;
