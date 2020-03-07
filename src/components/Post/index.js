import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <h3 className="postTitle">{post.blogTitle}</h3>
        <div className="imgContainer">
          <img
            alt="travel"
            src={require("../../assets/img/" + post.blogImage)}
          ></img>
        </div>
        <p className="postDescription">{post.blogText}</p>
        <Link to={`/post/${post.id}`}>
          <h5 className="postLink">Read more</h5>
        </Link>
        <h5 className="posteDate">
          Posted on {post.postedOn} by {post.author}
        </h5>
      </Animated>
    </div>
  );
};

export default Post;
