import React from "react";
import Article from "./Article";




const ArticleList= (props) =>{
    return (
        <main>
            {props.posts.map((post) =>(
                <Article
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
                minutes={post.minutes}
                />
            ))
            }
        </main>
    );
}
export default ArticleList;