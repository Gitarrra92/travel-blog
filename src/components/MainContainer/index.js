import React, { useEffect, useState } from "react";
import "./style.css";

import SideBar from "../SideBar";
import MainContent from "../MainContent";
import blogData from "../../assets/data/blog.json";
import Comments from "../Comments";

const MainContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const post = blogData.data;
    setPosts(post);
  }, []);

  return (
    <>
      <div className="mainContainer">
        <MainContent posts={posts} />
        <SideBar posts={posts} />
      </div>
      <Comments />
    </>
  );
};

export default MainContainer;
