const auth = require("../utils/auth");

const login = async (req, res) => {
  const { username, password } = req.body;

  const { USER, PASSWORD } = process.env;
  if (username === USER && password === PASSWORD) {
    const token = auth.sign({});
    res.cookie("accessToken", token, {
      secure: false, // set to true if your using https
      httpOnly: false,
    });
    res.send({ isAuth: true, token });
  } else res.send({ isAuth: false });
};

const verify = (req, res) => {
  const token = req.body.token;
  if (token) {
    const result = auth.verify(token);
    if (result) res.send({ isAuth: true });
    else res.send({ isAuth: false });
  } else {
    res.send({ isAuth: false });
  }
};

module.exports = { login, verify };
