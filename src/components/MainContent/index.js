import React, { useState, useEffect } from "react";
import "./style.css";
import Post from "../Post";

const MainContent = ({ posts }) => {
  //console.log(posts.blogTitle);

  return (
    <main className="main-content">
      {posts.map(post => {
        return <Post key={post.id} post={post} />;
      })}
    </main>
  );
};

export default MainContent;
