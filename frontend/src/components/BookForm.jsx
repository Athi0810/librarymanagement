import React from "react";

const BookForm = ({ formData, handleChange, handleSubmit, buttonText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <br /><br />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />

      <br /><br />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="isbn"
        placeholder="ISBN"
        value={formData.isbn}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default BookForm;