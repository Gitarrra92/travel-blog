import React from "react";
import "./style.css";

export default function DisplayComment({ firstComment }) {
  return (
    <div className="showingComments">
      {firstComment.map((com, i) => {
        return (
          <div className="displaySingleComment">
            <p>{com.nickname}</p>
            <p className="commentName">{com.comment}</p>
          </div>
        );
      })}
    </div>
  );
}
