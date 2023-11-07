import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getTodaysBet = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/admin/pinball/daily/today_bets`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while getting today's total bets. Please try again later."
    );
  }
};
