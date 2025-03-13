import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../components/Menu";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import FilterDropdown from "../../components/FilterDropdown";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [title_article, setTitle_article] = useState([]);
  const [selectedTitle_article, setSelectedTitle_article] = useState(null);

  useEffect(() => {
    displayArticle();
  }, []);

  const displayArticle = async () => {
    await axios.get("http://127.0.0.1:8000/api/article").then((res) => {
      setArticle(res.data); // Utilisation de "data" depuis la réponse de l'API
      setArticle(res.data.data); // Utilisation de "data" depuis la réponse de l'API
      setTitle_article(res.data.data.map(article => article.title_article));
    });
  };

  const deleteArticle = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/article/${id}`).then(displayArticle);
  };

  const filteredArticles = article.filter((article) => {
    return (
      !selectedTitle_article || article.title_article === selectedTitle_article
    );
  });

  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <div className="d-flex justify-content-between mb-3">
          <FilterDropdown
            items={title_article}
            selectedItem={selectedTitle_article}
            onChange={setSelectedTitle_article}
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


