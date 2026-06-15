import api from "./api";

const getAllBooks = async () => {
  const response = await api.get("/books");
  return response.data;
};

const getBookById = async (id) => {
  const response = await api.get(`/books/${id}`);
  return response.data;
};

const addBook = async (book) => {
  const response = await api.post("/books", book);
  return response.data;
};

const updateBook = async (id, book) => {
  const response = await api.put(`/books/${id}`, book);
  return response.data;
};

const deleteBook = async (id) => {
  const response = await api.delete(`/books/${id}`);
  return response.data;
};

const bookService = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};

export default bookService;