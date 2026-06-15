import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "220px",
        background: "#263238",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/books/add">Add Book</Link></li>
        <li><Link to="/members">Members</Link></li>
        <li><Link to="/members/add">Add Member</Link></li>
        <li><Link to="/issue-book">Issue Book</Link></li>
        <li><Link to="/return-book">Return Book</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;