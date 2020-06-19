// Because I am using custom server I am not actually using this apis

import Axios from "axios";
import { serialize } from "cookie";

// Cookies can only be set from the same origin
export default async (req, res) => {
  const { username, password } = req.body;
  const result = await Axios.post("/api/user/login", {
    username,
    password,
  });

  const { isAuth, token } = result.data;

  if (!isAuth) return res.status(400).send();
  res.setHeader(
    "Set-Cookie",
    serialize("accessToken", token, { path: "/", maxAge: 1800 })
  );
  res.send({ isAuth });
};
