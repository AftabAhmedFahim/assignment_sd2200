import React from "react";
import { Link } from "react-router-dom";
import authorImg from "../assets/author.jpeg"; 

export default function AuthorProfile() {
  return (
    <div className="author-profile" style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to="/" style={{ display: "block", marginBottom: "20px" }}>← Back</Link>
      <h1>Author Aftab</h1>
      <img
        src={authorImg}
        alt="Author"
        style={{
          borderRadius: "50%",
          marginBottom: "20px",
          width: "150px",
          height: "150px",
          objectFit: "cover"
        }}
      />
      <h3>Hello Everyone, this is author page of Aftab.</h3>
      <h4>Aftab studies in Ahsanullah University of Science and Technology.</h4>
    </div>
  );
}
