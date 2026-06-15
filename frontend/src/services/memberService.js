import api from "./api";

const getAllMembers = async () => {
  const response = await api.get("/members");
  return response.data;
};

const getMemberById = async (id) => {
  const response = await api.get(`/members/${id}`);
  return response.data;
};

const addMember = async (member) => {
  const response = await api.post("/members", member);
  return response.data;
};

const updateMember = async (id, member) => {
  const response = await api.put(`/members/${id}`, member);
  return response.data;
};

const deleteMember = async (id) => {
  const response = await api.delete(`/members/${id}`);
  return response.data;
};

const memberService = {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
};

export default memberService;