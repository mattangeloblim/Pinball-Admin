import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getTodayUserNumber = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/admin/pinball/daily/today_user`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while getting today's number of users. Please try again later."
    );
  }
};
