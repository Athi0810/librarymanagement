import React from "react";

const BookCard = ({ book }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    >
      <h3>{book.title}</h3>

      <p>
        <strong>Author:</strong> {book.author}
      </p>

      <p>
        <strong>Category:</strong> {book.category}
      </p>

      <p>
        <strong>ISBN:</strong> {book.isbn}
      </p>

      <p>
        <strong>Quantity:</strong> {book.quantity}
      </p>
    </div>
  );
};

export default BookCard;