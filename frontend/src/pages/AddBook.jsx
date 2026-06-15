import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const AddBook = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    isbn: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const saveBook = async (e) => {
    e.preventDefault();

    try {
      await api.post("/books", book);

      alert("Book Added Successfully");

      navigate("/books");
    } catch (error) {
      console.error(error);
      alert("Failed to Add Book");
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>

      <form onSubmit={saveBook}>
        <div>
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Author</label>
          <br />
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Category</label>
          <br />
          <input
            type="text"
            name="category"
            value={book.category}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>ISBN</label>
          <br />
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Quantity</label>
          <br />
          <input
            type="number"
            name="quantity"
            value={book.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">
          Save Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;