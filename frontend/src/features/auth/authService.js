import axios from "axios";

const API_URI = "http://localhost:2111/api/v1/user/";

// Register User
const register = async (userData) => {
  const response = axios.post(API_URI + 'signup', userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return (await response).data;
};

// Login User
const login = async (userData) => {
  const response = axios.post(API_URI + 'login', userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return (await response).data;
};

// Logout User
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login
};

export default authService;
