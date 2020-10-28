import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

// Hand down each post object as props for the `<Post/>` component.

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return (
    <main id="main">
      {posts.map((post) => {
        return <Post key={post.postId} post={post} />;
      })}
    </main>
  );
}

export default Main;
