import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getUsersCount = async () => {
  try {
    const response = await axios.get(`${baseUrl}/admin/pinball/userlist/count`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while getting the user count. Please try again later."
    );
  }
};
