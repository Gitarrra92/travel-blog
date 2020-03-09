import React from "react";
import "./style.css";

import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

const Post = ({ post, isSingle }) => {
  return (
    <div className="post">
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <h3 className="post__title">{post.blogTitle}</h3>
        <div className="post__imgContainer">
          <img
            alt="travel"
            src={
              post.blogImage
                ? require("../../assets/img/" + post.blogImage)
                : ""
            }
          ></img>
        </div>
        {!isSingle ? (
          <p className="post__escription">{post.postShortDescription}</p>
        ) : (
          <p className="post__description">{post.blogText}</p>
        )}
        {!isSingle ? (
          <Link to={`/post/${post.id}`}>
            <h5 className="post__link">Read more</h5>
          </Link>
        ) : (
          <Link to={`/`}>
            <h5 className="post__link">Back to home page</h5>
          </Link>
        )}
        <h5 className="post__date">
          Posted on {post.postedOn} by {post.author}
        </h5>
      </Animated>
    </div>
  );
};

export default Post;
