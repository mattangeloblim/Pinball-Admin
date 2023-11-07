/* eslint-disable */
import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const postGenerateResult = async (winningColor) => {
  const body = {
    result_data: winningColor,
  };

  try {
    // console.log(winningColor);
    // console.log(baseUrl);
    const response = await axios.post(
      `${baseUrl}/admin/pinball/generate-result`,
      body
    );
    // console.log("Response api:", response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while generating the result. Please try again later."
    );
  }
};
