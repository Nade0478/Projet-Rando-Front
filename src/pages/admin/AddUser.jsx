import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../components/Menu";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import FilterDropdown from "../../components/FilterDropdown";

const AddUser = () => {
  const [users, setUsers] = useState([]); // Correction du nom pour plus de clarté
  const [names, setNames] = useState([]);
  const [selectedName, setSelectedName] = useState(null);
  const navigate = useNavigate(); // Hook pour la navigation

  useEffect(() => {
    displayUsers();
  }, []);

  const displayUsers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/user");
      const fetchedUsers = response.data.data || []; // Vérification de la structure des données
      setUsers(fetchedUsers);
      setNames(fetchedUsers.map((user) => user.name_user));
    } catch (error) {
      console.error("Erreur lors de la récupération des users :", error);
      alert("Une erreur est survenue lors du chargement des users.");
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/user/${id}`);
      alert("User supprimé avec succès !");
      displayUsers(); // Actualise la liste après suppression
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("Erreur lors de la suppression de l'user.");
    }
  };

  const filteredUsers = users.filter((user) => {
    return (
      !selectedName || (user.name_user && user.name_user === selectedName)
    );
  });

  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <div className="d-flex justify-content-between mb-3">
          <FilterDropdown
            items={names}
            selectedItem={selectedName}
            onChange={setSelectedName}
          />
          <button
            className="btn btn-secondary"
            onClick={() => setSelectedName(null)}
          >
            Réinitialiser le filtre
          </button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom de l'utilisateur</th>
              <th>E-mail</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name_user}</td>
                <td>{user.mail_user}</td>
                <td>{user.password_user}</td>
                <td>
                  <Link
                    to={`/user/edit/${user.id}`}
                    className="btn btn-success me-2"
                  >
                    Modifier
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => deleteUser(user.id)}
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

export default AddUser;
