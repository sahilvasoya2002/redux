import axios from "axios";

const API_BASE_URL = "https://api.example.com"; // Replace with your base URL

export const postRequest = async (endpoint, payload) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, payload, {
      headers: headers,
    });

    return response?.data; // Return the response data
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error; // Throw error for handling in caller function
  }
};
