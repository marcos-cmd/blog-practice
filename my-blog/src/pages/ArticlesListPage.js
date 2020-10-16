import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
    // <React.Fragment> is used instead of wrapping in Divs
    <>
        <h1>Articles</h1>
        <ArticlesListPage articles={articleContent} />
    </>
);

export default ArticlesListPage;
