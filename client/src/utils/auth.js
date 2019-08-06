import axios from "axios";

export const login = async data => {
  //Send data to the backend to check if correct
  const result = await axios.post("/api/user/login", { ...data });
  if (result.data.isAuth) {
    sessionStorage.setItem("auth-token", result.data.token);
    return true;
  }
  return false;
};

export const verify = async token => {
  if (token) {
    const result = await axios.post("/api/user/verify", { token });
    if (result.data.isAuth) {
      return true;
    }
  }
  return false;
};
