import React, { useState, useEffect, useCallback } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

const EditPlace = () => {
  const { place } = useParams();
  const navigate = useNavigate();

  const [name_place, setName_place] = useState("");
  const [image_place, setImage_place] = useState(null);
  const [longitude_place, setLongitude_place] = useState("");
  const [latitude_place, setLatitude_place] = useState("");
  const [description_place, setDescription_place] = useState("");
  const [map_place, setMap_place] = useState(null);
  const [distance_place, setDistance_place] = useState("");
  const [difficulty_place, setDifficulty_place] = useState("");
  const [estimated_time_place, setEstimated_time_place] = useState("");
  const [validationError, setValidationError] = useState({});

  // Fetch the Place details
  const getPlace = useCallback(async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/place/${place}`);
      const placeData = res.data;
      setName_place(placeData.name_place);
      setImage_place(placeData.image_place);
      setLongitude_place(placeData.longitude_place);
      setLatitude_place(placeData.latitude_place);
      setDescription_place(placeData.description_place);
      setMap_place(placeData.map_place);
      setDistance_place(placeData.distance_place);
      setDifficulty_place(placeData.difficulty_place);
      setEstimated_time_place(placeData.estimated_time_place);
    } catch (error) {
      console.log(error);
    }
  }, [place]);

  // Use useEffect to fetch data
  useEffect(() => {
    getPlace();
  }, [getPlace]);

  const changeImageHandler = (e) => {
    setImage_place(e.target.files[0]);
  };

  const changeMapHandler = (e) => {
    setMap_place(e.target.files[0]);
  };

  const updatePlace = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("name_place", name_place);
    formData.append("longitude_place", longitude_place);
    formData.append("latitude_place", latitude_place);
    formData.append("description_place", description_place);
    formData.append("distance_place", distance_place);
    formData.append("difficulty_place", difficulty_place);
    formData.append("estimated_time_place", estimated_time_place);
    if (image_place) {
      formData.append("image_place", image_place);
    }
    if (map_place) {
      formData.append("map_place", map_place);
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
                <h4 className="card-title">Modifier l'endroit</h4>
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
                        <Form.Group controlId="name_place">
                          <Form.Label>Nom de l'endroit</Form.Label>
                          <Form.Control
                            type="text"
                            value={name_place}
                            onChange={(e) => setName_place(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="longitude_place">
                          <Form.Label>Longitude</Form.Label>
                          <Form.Control
                            type="text"
                            value={longitude_place}
                            onChange={(e) => setLongitude_place(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="latitude_place">
                          <Form.Label>Latitude</Form.Label>
                          <Form.Control
                            type="text"
                            value={latitude_place}
                            onChange={(e) => setLatitude_place(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="description_place">
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows="5"
                            value={description_place}
                            onChange={(e) => setDescription_place(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="distance_place">
                          <Form.Label>Distance</Form.Label>
                          <Form.Control
                            type="text"
                            value={distance_place}
                            onChange={(e) => setDistance_place(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="difficulty_place">
                          <Form.Label>Difficulté</Form.Label>
                          <Form.Control
                            type="text"
                            value={difficulty_place}
                            onChange={(e) => setDifficulty_place(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="estimated_time_place">
                          <Form.Label>Temps estimé</Form.Label>
                          <Form.Control
                            type="text"
                            value={estimated_time_place}
                            onChange={(e) => setEstimated_time_place(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="image_place" className="mb-3">
                          <Form.Label>Photo</Form.Label>
                          <Form.Control type="file" onChange={changeImageHandler} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="map_place">
                          <Form.Label>Carte</Form.Label>
                          <Form.Control
                            type="file"
                            onChange={changeMapHandler}
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
      </div>
      <Footer />
    </div>
  );
};

export default EditPlace;
