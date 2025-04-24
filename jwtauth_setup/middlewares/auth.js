const jwt = require("jsonwebtoken");

const scret = "Dhoni$07@$"
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, scret);
    // const decoded = jwt.verify(token, scret);
    console.log("i ma decoded",decoded)
    req.user = decoded.user;
    console.log("i ma req.user",req.user)
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" , error });
  }
};

module.exports = authMiddleware;
