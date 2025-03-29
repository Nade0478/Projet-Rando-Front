import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import FilterDropdown from "../components/FilterDropdown";
import Sidebar from "../components/admin/Sidebar";

const User = () => {
  const [users, setUsers] = useState([]); // Liste des utilisateurs
  const [names, setNames] = useState([]); // Liste des noms pour le filtre
  const [selectedName, setSelectedName] = useState(null); // Nom sélectionné pour le filtre
  const navigate = useNavigate(); // Hook pour la navigation

  useEffect(() => {
    displayUsers();
  }, []);

  const displayUsers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/user");
      const fetchedUsers = response.data || []; // Assure que la structure des données est correcte
      const filteredUsers = fetchedUsers.filter((user) => user.role_id === 2); // Filtre les utilisateurs avec role_id === 2
      setUsers(filteredUsers);
      setNames(filteredUsers.map((user) => user.name)); // Utilise les noms uniquement des utilisateurs filtrés
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs :", error);
      alert("Une erreur est survenue lors du chargement des utilisateurs.");
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/user/${id}`);
      alert("Utilisateur supprimé avec succès !");
      displayUsers(); // Actualise la liste après suppression
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("Erreur lors de la suppression de l'utilisateur.");
    }
  };

  const filteredUsers = users.filter((user) => {
    return !selectedName || (user.name && user.name === selectedName); // Filtre basé sur "name"
  });

  return (
    <div>
      <Sidebar />
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
              <th>Nom</th>
              <th>E-mail</th>
              <th>Rôle</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td> {/* Utilise la clé correcte */}
                <td>{user.email}</td> {/* Utilise la clé correcte */}
                <td>{user.role_id}</td> {/* Rôle de l'utilisateur */}
                <td>
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
      </div>
    </div>
  );
};

export default User;
