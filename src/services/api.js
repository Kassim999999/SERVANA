import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5001/api";

export const fetchServices = async () => {
  const res = await axios.get(`${API_BASE_URL}/services`);
  return res.data;
};

export const createBooking = async (data) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${API_BASE_URL}/bookings`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const loginUser = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/auth/login`, data);
  return res.data;
};

export const registerUser = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/auth/register`, data);
  return res.data;
};

export const getMyBookings = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${API_BASE_URL}/my-bookings`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getAllBookings = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${API_BASE_URL}/bookings`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
