import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getTodaysColor = async () => {
  try {
    const response = await axios.get(`${baseUrl}/admin/pinball/daily/color`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while getting the most popular color. Please try again later."
    );
  }
};
