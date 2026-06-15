import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    isbn: "",
    quantity: "",
  });

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    try {
      const response = await api.get(`/books/${id}`);
      setBook(response.data);
    } catch (error) {
      console.error(error);
      alert("Book not found");
    }
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const updateBook = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/books/${id}`, book);

      alert("Book Updated Successfully");

      navigate("/books");
    } catch (error) {
      console.error(error);
      alert("Failed to Update Book");
    }
  };

  return (
    <div>
      <h2>Edit Book</h2>

      <form onSubmit={updateBook}>
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
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;