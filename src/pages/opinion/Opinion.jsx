import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../components/Menu";
import axios from "axios";
import { Link } from "react-router-dom";

const Opinion = () => {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    displayOpinions();
  }, []);

  const displayOpinions = async () => {
    await axios.get("http://127.0.0.1:8000/api/opinion").then((res) => {
      setOpinions(res.data);
    });
  };

  const deleteOpinion = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/opinion/${id}`).then(displayOpinions);
  };

  return (
    <div>
      <Menu />
      <div className="container mt-5">
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
            {opinions.map((opinion) => (
              <tr key={opinion.id}>
                <td>{opinion.title_opinion}</td>
                <td>{opinion.content_opinion}</td>
                <td>{opinion.note_opinion}</td>
                <td>{opinion.user_id}</td> {/* Adaptez ceci selon la structure de votre objet `opinion` */}
                <td>{opinion.place_id}</td> {/* Adaptez ceci selon la structure de votre objet `opinion` */}
                <td>
                  <Link to={`/opinion/edit/${opinion.id}`} className="btn btn-success me-2">
                    Edit
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
      </div>
    </div>
  );
};

export default Opinion;

