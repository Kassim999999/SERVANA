const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5001/api";

export const loginUser = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/auth/login`, data);
  return res.data;
};

export const registerUser = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/auth/register`, data);
  return res.data;
};
