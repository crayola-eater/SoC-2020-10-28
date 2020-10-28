import React from "react";

import "./index.css";

// Use the information contained within the post object to build the `<Post/>` component using HTML elements in JSX. For the `highlights` property of the post object, use the map() method to generate an `<li>` element for each item in the array. For each `<li>` element, set the key to be the index of the item in the `highlights` array.

function Post({ post }) {
  const { title, date, author, text, highlights, image } = post;

  return (
    <article class="post">
      <h1>{title}</h1>
      <p>{date}</p>
      <h2>{author}</h2>
      <p>{text}</p>
      <ul>
        {highlights.map((highlight, i) => {
          return <li key={i}>{highlight}</li>;
        })}
      </ul>
      <img src={image.link} alt={image.alt} className="post-image" />
    </article>
  );
}

export default Post;
