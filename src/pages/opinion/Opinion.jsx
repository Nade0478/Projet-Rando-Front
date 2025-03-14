import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../components/Menu";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import FilterDropdown from "../../components/FilterDropdown";

const Opinion = () => {
  const [opinion, setOpinion] = useState([]);
  const [title_opinion, setTitle_opinion] = useState([]);
  const [selectedTitle_opinion, setSelectedTitle_opinion] = useState(null);
  
    useEffect(() => {
      displayOpinion();
    }, []);
  
    const displayOpinion = async () => {
      await axios.get("http://127.0.0.1:8000/api/opinion").then((res) => {
        setOpinion(res.data); // Utilisation de "data" depuis la réponse de l'API
        setOpinion(res.data.data); // Utilisation de "data" depuis la réponse de l'API
        setTitle_opinion(res.data.data.map(opinion => opinion.title_opinion));
      });
    };
  
    const deleteOpinion = (id) => {
      axios.delete(`http://127.0.0.1:8000/api/opinion/${id}`).then(displayOpinion);
    };
  
    const filteredOpinions = opinion.filter((opinion) => {
      return (
        !selectedTitle_opinion || opinion.title_opinion === selectedTitle_opinion
      );
    });
  
  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <div className="d-flex justify-content-between mb-3">
          <FilterDropdown
            items={title_opinion}
            selectedItem={selectedTitle_opinion}
            onChange={setSelectedTitle_opinion}
          />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Titre de l'opinion</th>
              <th>Contenu</th>
              <th>Note</th>
              <th>Auteur</th>
              <th>Lieux</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOpinions.map((opinion) => (
              <tr key={opinion.id}>
                <td>{opinion.title_opinion}</td>
                <td>{opinion.content_opinion}</td>
                <td>{opinion.note_opinion}</td>
                <td>{opinion.place.name_place}</td>
                <td>{opinion.user.name}</td>
                <td>
                  <Link
                    to={`/opinion/edit/${opinion.id}`}
                    className="btn btn-success me-2"
                  >
                    Editer
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteOpinion(opinion.id);
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

export default Opinion;

