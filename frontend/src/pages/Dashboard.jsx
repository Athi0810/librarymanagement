import React, { useEffect, useState } from "react";
import api from "../services/api";

const Dashboard = () => {
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);
  const [issuedBooks, setIssuedBooks] = useState(0);
  const [returnedBooks, setReturnedBooks] = useState(0);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const books = await api.get("/books");
      setTotalBooks(books.data.length);

      const members = await api.get("/members");
      setTotalMembers(members.data.length);

      const issues = await api.get("/issues");
      setIssuedBooks(issues.data.length);

      const returned = issues.data.filter(
        (item) => item.returned === true
      );

      setReturnedBooks(returned.length);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome to Library Management System</p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#2196f3",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Total Books</h3>
          <h1>{totalBooks}</h1>
        </div>

        <div
          style={{
            background: "#4caf50",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Total Members</h3>
          <h1>{totalMembers}</h1>
        </div>

        <div
          style={{
            background: "#ff9800",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Issued Books</h3>
          <h1>{issuedBooks}</h1>
        </div>

        <div
          style={{
            background: "#f44336",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Returned Books</h3>
          <h1>{returnedBooks}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;