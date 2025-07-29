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
  likes: 10,
  dislikes: 2
}));

export default function PostPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 2;

  const lastIndex = currentPage * commentsPerPage;
  const firstIndex = lastIndex - commentsPerPage;
  const currentComments = dummyComments.slice(firstIndex, lastIndex);

  return (
    <div className="post-container">
      <div className="post-header">
        <Link to="/author" className="author-link">Author Aftab</Link>
        <p>15 January 2021</p>

        <img
          src={postImg}
          alt="Post"
          className="post-image"
        />
      </div>

      <p className="post-content">
        This is the post content with some random image. Hello.
      </p>

      <ReactionButtons />

      <div className="comments-section">
        <h4>20 Comments</h4>
        <input className="comment-input" placeholder="You can write comment here..." />

        {currentComments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        <Pagination
          totalItems={dummyComments.length}
          itemsPerPage={commentsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
