import React, { useState, useEffect } from "react";
import Post from "../../components/Post";
import "./style.css";

import Socials from "../../components/Socials";
import blogSingleData from "../../assets/data/blog.json";

const SinglePost = ({ match }) => {
  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    const singlePost = blogSingleData.data.find(
      post => +post.id === +match.params.id
    );
    setSinglePost(singlePost);
  }, [match]);

  return (
    <>
      <Post key={singlePost.id} post={singlePost} isSingle />
      <Socials />
    </>
  );
};

export default SinglePost;
