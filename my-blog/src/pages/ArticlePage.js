import React from 'react';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    if (!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article.name != name);
    return (
    // <React.Fragment> is used instead of wrapping in Divs
    <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <h3>Other Articles</h3>
        <ArticlesList artticles={otherArticles} />
    </>
);
    }

export default ArticlePage;
