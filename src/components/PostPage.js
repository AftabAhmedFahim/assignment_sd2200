import React, { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import Pagination from "./Pagination";
import ReactionButtons from "./ReactionButtons";
import postImg from "../assets/postImage.jpeg"; 
import "./PostPage.css";

const dummyComments = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  author: "Author X",
  date: "16 January 2021",
  content: "Hello there.",
  likes: 11,
  dislikes: 6,
  reaction: null // keep track of local reaction
}));

export default function PostPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [comments, setComments] = useState(dummyComments);

  const commentsPerPage = 2;
  const lastIndex = currentPage * commentsPerPage;
  const firstIndex = lastIndex - commentsPerPage;
  const currentComments = comments.slice(firstIndex, lastIndex);

  const handleReaction = (id, type) => {
    setComments(prev =>
      prev.map(comment => {
        if (comment.id !== id) return comment;

        let newLikes = comment.likes;
        let newDislikes = comment.dislikes;

        if (type === "like") {
          if (comment.reaction === "like") {
            newLikes--;
            return { ...comment, likes: newLikes, reaction: null };
          } else {
            newLikes += 1;
            if (comment.reaction === "dislike") newDislikes -= 1;
            return {
              ...comment,
              likes: newLikes,
              dislikes: newDislikes,
              reaction: "like"
            };
          }
        } else if (type === "dislike") {
          if (comment.reaction === "dislike") {
            newDislikes--;
            return { ...comment, dislikes: newDislikes, reaction: null };
          } else {
            newDislikes += 1;
            if (comment.reaction === "like") newLikes -= 1;
            return {
              ...comment,
              dislikes: newDislikes,
              likes: newLikes,
              reaction: "dislike"
            };
          }
        }

        return comment;
      })
    );
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <Link to="/author" className="author-link">Author Aftab</Link>
        <p>15 January 2021</p>

        <img src={postImg} alt="Post" className="post-image" />
      </div>

      <p className="post-content">
        Hello. This is the post content with some random image. This is for an assignment of CSE2200.
      </p>

      <ReactionButtons />

      <div className="comments-section">
        <h4>{comments.length} Comments of the post</h4>
        <input className="comment-input" placeholder="You can write comment here..." />

        {currentComments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            onReact={handleReaction}
          />
        ))}

        <Pagination
          totalItems={comments.length}
          itemsPerPage={commentsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
