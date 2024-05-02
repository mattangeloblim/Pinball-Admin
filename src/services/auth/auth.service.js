import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const loginUser = async (identifier, password) => {
  const body = {
    identifier,
    password,
  };

  try {
    const response = await axios.post(
      `${baseUrl}/user/authentication/login`,
      body
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default {
  loginUser,
};
