import React from 'react';
import { Link } from 'react-router-dom';
import articleContent from '../pages/article-content';


const ArticlesList = () => (
    <>
    {articleContent.map((article, key) => (
        <Link  to={`/article/${article.name}`} key={key}>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
        
    ))}
    </>
);

export default ArticlesList;
