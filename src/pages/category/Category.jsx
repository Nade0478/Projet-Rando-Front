import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    displayCategory();
  }, []);

  const displayCategory = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/category");
      if (res.data) {
        setCategory(res.data);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };

  const deleteCategory = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/category/${id}`)
      .then(displayCategory);
  };

  return (
    <div>
      <Sidebar />
      <Link to={`/category/add`} className="btn btn-dark me-2">
        Ajouter un catégorie
      </Link>
      <div className="container mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom de la catégorie</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {category.map((category) => (
              <tr key={category.id}>
                <td>{category.name_category}</td>
                <td>
                  <Link
                    to={`/category/edit/${category.id}`}
                    className="btn btn-success me-2"
                  >
                    Éditer
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteCategory(category.id);
                    }}
                  >
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Category;
