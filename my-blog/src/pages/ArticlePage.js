import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import AddCommentForm from '../components/AddCommentsForm';
// import CommentsList from '../components/CommentsList';
import UpvoteSection from '../components/UpvoteSection';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    // use effect runs when the component first mounts but also when it updates
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:8000/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
        // we are upvoting the article a random amount of times for show
        setArticleInfo({ upvotes: Math.ceil(Math.random()*10) });
        // to prevent this, you add an empty array as a second argument for it
        // the array tells useEffect that we only want it to be called when it first loads
    }, [name]);

    if (!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);
    return (
    // <React.Fragment> is used instead of wrapping in Divs
    <>
        <h1>{article.title}</h1>
        <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
        <p>This post has been upvoted {articleInfo.upvotes} times.</p>
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        {/* <CommentsList comments={articleInfo.comments} /> */}
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />

        <h3>Other Articles</h3>
        <ArticlesList articles={otherArticles} />
    </>
);
    }

export default ArticlePage;
