const jwt = require("jsonwebtoken");

module.exports = {
  sign: (payload, options = {}) => {
    let signingOptions = {};
    {
      const { issuer, subject, audience, expiresIn, algorithm } = options;
      signingOptions = {
        issuer: issuer || "",
        subject: subject || "",
        audience: audience || "",
        expiresIn: "30m",
      };
    }
    return jwt.sign(payload, process.env.SECRET_KEY, signingOptions);
  },

  verify: (token, options = {}) => {
    let signingOptions = {};
    {
      const { issuer, subject, audience, expiresIn, algorithem } = options;
      signingOptions = {
        issuer,
        subject,
        audience,
        expiresIn,
        algorithem,
      };
    }

    try {
      return jwt.verify(token, process.env.SECRET_KEY, signingOptions);
    } catch (err) {
      return false;
    }
  },

  decode: (token) => {
    return jwt.decode(token, { complete: true });
    //returns null if token is invalid
  },
};
