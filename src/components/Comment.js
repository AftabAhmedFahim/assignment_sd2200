import React, { useState } from "react";

export default function Comment({ comment }) {
  const [reaction, setReaction] = useState(null); 

  const handleReaction = (type) => {
    setReaction(reaction === type ? null : type);
  };

  return (
    <div className="comment-box">
      <div className="comment-header">
        <span className="comment-author">{comment.author}</span>
        <span className="comment-date">{comment.date}</span>
        <span className="comment-report">Report</span>
      </div>

      <p>{comment.content}</p>

      <div className="comment-reactions">
        <button
          className={`comment-btn ${reaction === "like" ? "active" : ""}`}
          onClick={() => handleReaction("like")}
        >
          👍 Like {comment.likes}
        </button>

        <button
          className={`comment-btn ${reaction === "dislike" ? "active" : ""}`}
          onClick={() => handleReaction("dislike")}
        >
          👎 Dislike {comment.dislikes}
        </button>

        <span className="reply-btn">Reply</span>
      </div>
    </div>
  );
}
