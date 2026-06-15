import React, { useEffect, useState } from "react";
import api from "../services/api";

const ReturnBook = () => {
  const [issuedBooks, setIssuedBooks] = useState([]);

  useEffect(() => {
    fetchIssuedBooks();
  }, []);

  const fetchIssuedBooks = async () => {
    try {
      const response = await api.get("/issues");
      setIssuedBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const returnBook = async (id) => {
    try {
      await api.put(`/issues/return/${id}`);

      alert("Book Returned Successfully");

      fetchIssuedBooks();
    } catch (error) {
      console.error(error);
      alert("Failed to Return Book");
    }
  };

  return (
    <div>
      <h2>Return Book</h2>

      <table
        border="1"
        width="100%"
        cellPadding="10"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Book</th>
            <th>Member</th>
            <th>Issue Date</th>
            <th>Return Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {issuedBooks.length > 0 ? (
            issuedBooks.map((issue) => (
              <tr key={issue.id}>
                <td>{issue.id}</td>
                <td>{issue.book?.title}</td>
                <td>{issue.member?.name}</td>
                <td>{issue.issueDate}</td>
                <td>{issue.returnDate}</td>
                <td>
                  {issue.returned ? "Returned" : "Issued"}
                </td>

                <td>
                  {!issue.returned && (
                    <button
                      onClick={() => returnBook(issue.id)}
                    >
                      Return
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" align="center">
                No Issued Books Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReturnBook;