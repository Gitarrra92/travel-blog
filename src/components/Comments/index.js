import React, { useState } from "react";
import "./style.css";
import AddingComments from "./AddingComments";
import DisplayComment from "./DisplayComment";

export default function Comments() {
  const [firstComment, setFirstComment] = useState([
    {
      nickname: "Natalia",
      comment: "Very nice website. I love it!"
    }
  ]);
  const [newComment, setNewComment] = useState([{ nickname: "", comment: "" }]);
  return (
    <div className="comments">
      <AddingComments
        firstComment={firstComment}
        setFirstComment={setFirstComment}
        newComment={newComment}
        setNewComment={setNewComment}
      />
      <DisplayComment firstComment={firstComment} />
    </div>
  );
}
