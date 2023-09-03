import React from "react";

const Article= (props) => {
    const minutesToRead = Math.ceil(props.minutes / 5);
    const coffeeCups = "☕".repeat(minutesToRead);

    const calculatedReadTimeEmoji =() =>{
        if (props.minutes < 30) {
            return coffeeCups;
        } else {
            const bentoBoxes= "🍱".repeat(Math.ceil(props.minutes / 10));
            return bentoBoxes;
        }
    } 

    return(
        <article>
            <h3>{props.title}</h3>
            <small>{props.date ? props.date : "January 1, 1970"}</small>
            <p>{props.preview}</p>
            <div>{calculatedReadTimeEmoji()} {props.minutes} min read</div>
        </article>
    );
}

export default Article;