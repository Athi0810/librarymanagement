import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#1976d2",
        color: "#fff",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Library Management System</h2>

      <button
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          window.location.href = "/";
        }}
        style={{
          padding: "8px 15px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;