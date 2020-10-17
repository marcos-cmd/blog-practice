import React from 'react';

const UpvoteSection = ({ upvotes, articleName, setArticleInfo }) => {
    const upvoteArticle = async () => {
        await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post'
        });
        const body = await response.json();
        setArticleInfo(body);
    };
    return(
    <div id="upvotes-section">
        <button onClick={}>Add Upvote</button>
        <p>This post has been upvoted {articleInfo.upvotes} times.</p>
    </div>
    );
}

export default UpvoteSection;
