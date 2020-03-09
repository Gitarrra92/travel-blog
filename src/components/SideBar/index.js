import React from "react";
import "./style.css";

import AboutCard from "../AboutCard";
import PreviousPostsCard from "../PreviousPostsCard";

const SideBar = ({ posts }) => {
  return (
    <aside className="sidebar">
      <AboutCard />
      <PreviousPostsCard posts={posts} />
    </aside>
  );
};
export default SideBar;
