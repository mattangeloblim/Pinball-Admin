import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getTransactionTable = async () => {
  try {
    const response = await axios.get(`${baseUrl}/admin/pinball/transaction`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while getting the bet table. Please try again later."
    );
  }
};
