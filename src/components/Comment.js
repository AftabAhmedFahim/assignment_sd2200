import React, { useState } from "react";

export default function Comment({ comment, onReact }) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const toggleReplyBox = () => {
    setShowReplyBox((prev) => !prev);
    setReplyText(""); // reset on open/close
  };

  const handleReport = () => {
    alert("Comment reported!");
  };

  return (
    <div className="comment-box">
      <div className="comment-header">
        <span className="comment-author">{comment.author}</span>
        <span className="comment-date">{comment.date}</span>
        <span className="comment-report" onClick={handleReport}>
          Report
        </span>
      </div>

      <p>{comment.content}</p>

      <div className="comment-reactions">
        <button
          className={`comment-btn ${
            comment.reaction === "like" ? "active" : ""
          }`}
          onClick={() => onReact(comment.id, "like")}
        >
          Likes {comment.likes}
        </button>

        <button
          className={`comment-btn ${
            comment.reaction === "dislike" ? "active" : ""
          }`}
          onClick={() => onReact(comment.id, "dislike")}
        >
          Dislikes {comment.dislikes}
        </button>

        <span className="reply-btn" onClick={toggleReplyBox}>
          Reply
        </span>
      </div>

      {showReplyBox && (
        <div className="reply-box">
          <textarea
            className="reply-input"
            placeholder="Write your reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className="reply-actions">
            <button className="reply-reply-btn">Reply</button>
            <button className="cancel-reply-btn" onClick={toggleReplyBox}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
