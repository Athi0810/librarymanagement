import api from "./api";

const getAllIssuedBooks = async () => {
  const response = await api.get("/issues");
  return response.data;
};

const issueBook = async (issueData) => {
  const response = await api.post("/issues", issueData);
  return response.data;
};

const returnBook = async (id) => {
  const response = await api.put(`/issues/return/${id}`);
  return response.data;
};

const getIssueById = async (id) => {
  const response = await api.get(`/issues/${id}`);
  return response.data;
};

const issueService = {
  getAllIssuedBooks,
  issueBook,
  returnBook,
  getIssueById,
};

export default issueService;