import axios from "axios";

const API_URL = "http://localhost:4000/api/v1/admin";
// const API_URL_MANAGER = "http://localhost:4000/api/v1/manager";

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

// export const fetchAllManagers = async () => {
//   try {
//     const token = localStorage.getItem("token");
//     const response = await axios.get(`${API_URL_MANAGER}/viewAllUsers`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };
