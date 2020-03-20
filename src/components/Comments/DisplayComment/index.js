import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";

export default function DisplayComment({ firstComment }) {
  const [changeIcon, setChangeIcon] = useState(true);
  const likeComment = () => {
    setChangeIcon(false);
  };
  return (
    <div className="showingComments">
      {firstComment.map((com, i) => {
        return (
          <div className="displaySingleComment">
            <p>{com.nickname}</p>
            <div className="simpleComment">
              <p className="commentName">{com.comment}</p>
              <div className="commentLike" onClick={likeComment}>
                {changeIcon ? (
                  <FontAwesomeIcon
                    icon={faGratipay}
                    size="2x"
                  ></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={faHeart} size="2x"></FontAwesomeIcon>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
