import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getTotalBetNumber = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/admin/pinball/daily/bet_number`
    );
    // console.log(response);
    // return response.data.result[0].dailyTotalBetNumber;
    return response.data.dailyTotalBetNumber;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while getting the total bets. Please try again later."
    );
  }
};
