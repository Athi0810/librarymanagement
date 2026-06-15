import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1
        style={{
          fontSize: "80px",
          color: "#f44336",
        }}
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <br />

      <Link to="/dashboard">
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Go To Dashboard
        </button>
      </Link>
    </div>
  );
};

export default NotFound;