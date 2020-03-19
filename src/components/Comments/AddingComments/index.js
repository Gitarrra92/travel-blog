import React from "react";
import "./style.css";

import Title from "../../Title";

export default function AddingComments({
  title,
  firstComment,
  setFirstComment,
  newComment,
  setNewComment
}) {
  const addComment = payload => {
    const prevArr = firstComment;
    const newArr = [...prevArr, payload];
    setFirstComment(newArr);
    setNewComment({ nickname: "", comment: "" });
  };

  return (
    <div className="addingComments">
      <Title title="Add your comment or opinion" />
      <form onSubmit={e => e.preventDefault()}>
        <div className="commentForm">
          <input
            value={newComment.nickname}
            onChange={e =>
              setNewComment({ ...newComment, nickname: e.currentTarget.value })
            }
            type="text"
            minLength="1"
            maxLength="25"
            placeholder="your nick"
          ></input>
          <textarea
            value={newComment.comment}
            onChange={e =>
              setNewComment({ ...newComment, comment: e.currentTarget.value })
            }
            type="text"
            minLength="1"
            placeholder="add your comment"
          ></textarea>
          <button onClick={() => addComment(newComment)}>Add</button>
        </div>
      </form>
    </div>
  );
}
