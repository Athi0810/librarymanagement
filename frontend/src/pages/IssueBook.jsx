import React, { useEffect, useState } from "react";
import api from "../services/api";

const IssueBook = () => {
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);

  const [issueData, setIssueData] = useState({
    bookId: "",
    memberId: "",
    issueDate: "",
    returnDate: "",
  });

  useEffect(() => {
    loadBooks();
    loadMembers();
  }, []);

  const loadBooks = async () => {
    try {
      const response = await api.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMembers = async () => {
    try {
      const response = await api.get("/members");
      setMembers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setIssueData({
      ...issueData,
      [e.target.name]: e.target.value,
    });
  };

  const issueBook = async (e) => {
    e.preventDefault();

    try {
      await api.post("/issues", issueData);

      alert("Book Issued Successfully");

      setIssueData({
        bookId: "",
        memberId: "",
        issueDate: "",
        returnDate: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to Issue Book");
    }
  };

  return (
    <div>
      <h2>Issue Book</h2>

      <form onSubmit={issueBook}>
        <div>
          <label>Select Book</label>
          <br />

          <select
            name="bookId"
            value={issueData.bookId}
            onChange={handleChange}
            required
          >
            <option value="">Choose Book</option>

            {books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </select>
        </div>

        <br />

        <div>
          <label>Select Member</label>
          <br />

          <select
            name="memberId"
            value={issueData.memberId}
            onChange={handleChange}
            required
          >
            <option value="">Choose Member</option>

            {members.map((member) => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
        </div>

        <br />

        <div>
          <label>Issue Date</label>
          <br />

          <input
            type="date"
            name="issueDate"
            value={issueData.issueDate}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Return Date</label>
          <br />

          <input
            type="date"
            name="returnDate"
            value={issueData.returnDate}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">
          Issue Book
        </button>
      </form>
    </div>
  );
};

export default IssueBook;