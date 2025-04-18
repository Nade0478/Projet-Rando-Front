import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const EditCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [nameCategory, setNameCategory] = useState("");
  const [validationError, setValidationError] = useState({});

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/category/${category}`);
        setNameCategory(res.data.name_category);
      } catch (error) {
        console.error("Erreur lors de la récupération de la catégorie :", error);
      }
    };

    fetchCategory();
  }, [category]); // Utilisation de `category` comme dépendance pour éviter l'erreur ESLint

  // Fonction de mise à jour de la catégorie
  const updateCategory = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("name_category", nameCategory);

    try {
      await axios.post(`http://127.0.0.1:8000/api/category/${category}`, formData);
      navigate("/category");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setValidationError(error.response.data.errors);
      }
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="container mt-5 card-wrapper">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title text-center">Modifier une catégorie</h4>
            <hr />
            <div className="form-wrapper">
              {Object.keys(validationError).length > 0 && (
                <div className="alert alert-danger">
                  <ul className="mb-0">
                    {Object.entries(validationError).map(([key, value]) => (
                      <li key={key}>{value}</li>
                    ))}
                  </ul>
                </div>
              )}
              <Form onSubmit={updateCategory}>
                <Row>
                  <Col>
                    <Form.Group controlId="Name">
                      <Form.Label className="text-center w-100">Nom de la catégorie</Form.Label>
                      <Form.Control
                        type="text"
                        value={nameCategory}
                        onChange={(e) => setNameCategory(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="dark" className="mt-2 w-100" type="submit">
                  Mettre à jour
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
