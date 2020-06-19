import Axios from "axios";
import cookie from "cookie";
// Cookies can only be set from the same origin
export default async (req, res) => {
  const { accessToken } = req.cookies;
  console.log("+++++++++++++++++++++++++++++++");

  const result = await Axios.post(
    "https://mtgdev.herokuapp.com/api/projects/add",
    {
      ...req.body,
      accessToken,
    }
  );

  // console.log(result.data);

  res.send(result.data);
};
