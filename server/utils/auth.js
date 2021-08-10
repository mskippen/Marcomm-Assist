const jwt = require("jsonwebtoken");

function generateToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    user_type: user.user_type,
  };

  return jwt.sign(payload, "secret key", { expiresIn: "24hr" });
}

function authorizeUser(req) {
  const token = req.headers.authorization || req.headers["x-access-token"];
  // console.log(token, "from middleware");

  if (!token) return req;
  // throw new Error("No token provided");

  jwt.verify(token, "secret key", (err, decoded) => {
    if (err) {
      throw new Error(err);
    } else {
      req.user = decoded;
      // console.log(req.user);
      return req;
    }
  });
}

module.exports = {
  generateToken,
  authorizeUser,
};
