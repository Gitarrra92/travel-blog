import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { Animated } from "react-animated-css";

const PreviousPostsCard = ({ posts }) => {
  return (
    <div className="previousPostsCard">
      <h3>Previous Posts:</h3>
      {posts.map(post => {
        return (
          <div key={post.id} className="previusPostCard">
            <Animated
              animationIn="bounceInRight"
              animationOut="fadeOut"
              isVisible={true}
            >
              <NavLink
                to={`/post/${post.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3>{post.blogTitle}</h3>
                <h4>{post.shortText}</h4>
                <h5>{post.postedOn}</h5>
              </NavLink>
            </Animated>
          </div>
        );
      })}
    </div>
  );
};

export default PreviousPostsCard;
