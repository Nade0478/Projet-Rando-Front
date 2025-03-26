import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CustomNavbar from "../components/admin/CustomNavbar";

const Role = () => {
  const [role, setRole] = useState([]);

  useEffect(() => {
    displayRole();
  }, []);

  const displayRole = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/role");
      if (res.data ) {
        setRole(res.data);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };

  const deleteRole = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/role/${id}`).then(displayRole);
  };

  return (
    <div>
      <CustomNavbar />
      <div className="container mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom de la catégorie</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {role.map((role) => (
              <tr key={role.id}>
                <td>{role.role}</td>
                <td>
                  <Link
                    to={`/role/edit/${role.id}`}
                    className="btn btn-success me-2"
                  >
                    Éditer
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteRole(role.id);
                    }}
                  >
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Footer />
      </div>
    </div>
  );
};

export default Role;



