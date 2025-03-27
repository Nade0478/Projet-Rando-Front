import React from 'react'; 

const ArticleForm = ({ article = {} }) => { // Ajout d'une valeur par défaut pour éviter les erreurs si article est indéfini
    return ( 
        <div className="articleCard"> 
            <div className="contentArticle"> 
                {/* Vérifie si sprites et front_default existent avant d'accéder à leurs valeurs */}
                {article?.sprites?.front_default ? (
                    <img 
                        src={article.sprites.front_default} 
                        alt={article.title || "Titre inconnu"} // Affichage de l'attribut alt corrigé
                    />
                ) : (
                    <img 
                        src={`http://127.0.0.1:8000/storage/public/uploads/${article.image_article}`} 
                        alt={article.title || "Titre inconnu"} // Affichage de l'attribut alt corrigé
                    />
                )}
                {/* Vérifie si name existe et affiche en majuscule ou un message par défaut */}
                <h3>{article?.name?.toUpperCase() || "Nom inconnu"}</h3> 
            </div>   
        </div> 
    ); 
}; 

export default ArticleForm;

