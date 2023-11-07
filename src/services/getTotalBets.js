import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getTotalBets = async () => {
  try {
    const response = await axios.get(`${baseUrl}/admin/pinball/amount/sum`);
    return response.data.totalAmount;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while getting the total bets. Please try again later."
    );
  }
};
