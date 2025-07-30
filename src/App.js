import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import PostPage from "./components/PostPage";
import AuthorProfile from "./components/AuthorProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/author" element={<AuthorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
