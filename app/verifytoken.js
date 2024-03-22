import jwt from "jsonwebtoken";
import "dotenv/config";

const verifytoken = (req, res, next) => {
  const token = req.cookies["access_token"];
  console.log(token, "token>>>>>>>>>>>>>>>>>>>>>>");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
  jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
    if (err) {
      console.error("JWT verification failed:", err);
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    req.user = decoded;
    console.log(decoded, ".>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    next();
  });
};

export { verifytoken };
