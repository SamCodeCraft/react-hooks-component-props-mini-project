import React from "react";

function ArticleList({ posts }) {
    return (
        <main>
            {posts.map((post) => (
                <ArticleList key={post.id} {...post} />
            ))}
        </main>
    );
}

export default ArticleList;