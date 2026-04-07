import axios from "axios";

const API_URL = "http://localhost:4000/api/v1/admin";

export const addManager = async (managerData) => {
  try {
    const response = await axios.post(`${API_URL}/createManager`, managerData, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/createUser`, userData, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};