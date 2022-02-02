import axios from "axios";

const API_URL = "https://localhost:8080/api/v1/";

const register = (username, email, password) => {
  return axios.post(API_URL + "users/", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "sign_in", { user: {
      email: username,
      password: password,
    }})
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
