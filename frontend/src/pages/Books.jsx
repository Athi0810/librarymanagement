import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const response = await api.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error loading books:", error);
      alert("Failed to load books");
    }
  };

  const deleteBook = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/books/${id}`);
      loadBooks();
    } catch (error) {
      console.error(error);
      alert("Failed to delete book");
    }
  };

  return (
    <div>
      <h1>Books Management</h1>

      <Link to="/books/add">
        <button
          style={{
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          Add Book
        </button>
      </Link>

      <table
        border="1"
        width="100%"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>ISBN</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.isbn}</td>
                <td>{book.quantity}</td>

                <td>
                  <Link to={`/books/edit/${book.id}`}>
                    <button>Edit</button>
                  </Link>

                  <button
                    onClick={() => deleteBook(book.id)}
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No Books Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Books;