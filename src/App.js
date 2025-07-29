import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostPage from "./components/PostPage";
import AuthorProfile from "./components/AuthorProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/author" element={<AuthorProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
