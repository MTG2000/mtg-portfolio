import axios from "axios";

export const login = async (data) => {
  //Send data to the backend to check if correct
  const result = await axios.post("/api/user/login", {
    ...data,
  });

  if (result.data.isAuth) {
    return true;
  }
  return false;
};

export const getToken = () => sessionStorage.getItem("auth-token");

export const verify = () => {
  const token = sessionStorage.getItem("auth-token");
  if (token) {
    return true;
  }
  return false;
};
