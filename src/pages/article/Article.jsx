import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../components/Menu";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import FilterDropdown from "../../components/FilterDropdown";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState(null);

  useEffect(() => {
    displayArticle();
  }, []);

  const displayArticle = async () => {
    await axios.get("http://127.0.0.1:8000/api/article").then((res) => {
      setArticles(res.data.data); // Utilisation de "data" depuis la réponse de l'API
      setTitles(res.data.data.map(article => article.title_article));
    });
  };

  const deleteArticle = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/article/${id}`).then(displayArticle);
  };

  const filteredArticles = articles.filter((article) => {
    return (
      !selectedTitle || article.title_article === selectedTitle
    );
  });

  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <div className="d-flex justify-content-between mb-3">
          <FilterDropdown
            items={titles}
            selectedItem={selectedTitle}
            onChange={setSelectedTitle}
          />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Titre de l'article</th>
              <th>Image</th>
              <th>Date</th>
              <th>Contenu</th>
              <th>Catégorie</th>
              <th>Auteur</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredArticles.map((article) => (
              <tr key={article.id}>
                <td>{article.title_article}</td>
                <td>
                  <img
                    src={article.image_article}
                    alt={article.title_article}
                    width="75px"
                  />
                </td>
                <td>{new Date(article.date_article).toLocaleDateString()}</td>
                <td>{article.content_article}</td>
                <td>{article.category.name_category}</td>
                <td>{article.user.name}</td>
                <td>
                  <Link
                    to={`/article/edit/${article.id}`}
                    className="btn btn-success me-2"
                  >
                    Editer
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteArticle(article.id);
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

export default Article;


