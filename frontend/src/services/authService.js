import api from "./api";

const login = async (username, password) => {
  const response = await api.post("/auth/login", {
    username,
    password,
  });

  return response.data;
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;