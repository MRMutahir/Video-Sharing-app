import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifytoken = (req, res, next) => {
  const token = req.cookies["access_token"];
  // console.log(token, "token>>>>>>>>>>>>>>>>>>>>>>");
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }
  jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }
    req.user = decoded;
    // console.log(decoded, ".>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    next();
  });
};

export { verifytoken };
