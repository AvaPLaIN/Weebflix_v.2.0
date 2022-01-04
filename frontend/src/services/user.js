//* IMPORTS
import axios from "axios";

//* CONSTANTS
const PROXY_URL = "http://localhost:8800/api/auth";

//* SERVICES
export const register = async (credentials) => {
  try {
    const data = await axios.post(`${PROXY_URL}/register`, credentials);
    return data?.data;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async (credentials) => {
  try {
    const data = await axios.post(`${PROXY_URL}/login`, credentials);
    console.log("login data: ", data);
    return data?.data;
  } catch (error) {
    return error.response.data;
  }
};

export const validate = async (token) => {
  try {
    const data = await axios.put(`${PROXY_URL}/validate/${token}`, {});
    return data?.data;
  } catch (error) {
    return error.response.data;
  }
};

export const verify = async (user) => {
  try {
    const data = await axios.post(`${PROXY_URL}/verify`, user);
    return data?.data;
  } catch (error) {
    return error.response.data;
  }
};

export const resetPassword = async (token, password, confirmPassword) => {
  try {
    const data = await axios.put(`${PROXY_URL}/resetPassword/${token}`, {
      password,
      confirmPassword,
    });
    return data?.data;
  } catch (error) {
    return error.response.data;
  }
};

export const requestPassword = async (email) => {
  try {
    const data = await axios.post(`${PROXY_URL}/forgotPassword`, {
      email,
    });
    return data?.data;
  } catch (error) {
    return error.response.data;
  }
};
