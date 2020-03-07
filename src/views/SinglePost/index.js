import React, { useState, useEffect } from "react";
import "./style.css";

import Socials from "../../components/Socials";
import blogSingleData from "../../assets/data/blog.json";

const SinglePost = ({ match }) => {
  const [singlePosts, setSinglePost] = useState({});

  useEffect(() => {
    const singlePost = blogSingleData.data;
    setSinglePost(singlePost);
    console.log(singlePost);
  }, [match]);

  return (
    <>
      <Socials />
    </>
  );
};

export default SinglePost;
