import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5001/api";

export const fetchServices = async () => {
  const res = await axios.get(`${API_BASE_URL}/services`);
  return res.data;
};

export const createBooking = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/bookings`, data);
  return res.data;
};
