import React from 'react';
import { Card } from 'react-bootstrap';
import Menu from './Menu';
import Footer from './Footer';

import ArticleForm from './ArticleForm';

const BlogForm = () => {
  return (
    <div>
      <Menu />
      <Card style={{ padding: '20px', margin: '20px' }}>
        <ArticleForm />
        <h2>Créer un Nouvel Article</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <input 
              type="text" 
              placeholder="Titre de l'article" 
              style={{ width: '100%', padding: '10px', fontSize: '1em' }} 
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <textarea
              placeholder="Contenu de l'article"
              style={{ width: '100%', padding: '10px', fontSize: '1em', height: '100px' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer' }}>
            Publier
          </button>
        </form>
      </Card>
      <Footer />
    </div>
  );
};

export default BlogForm;
