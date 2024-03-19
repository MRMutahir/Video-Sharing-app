import jwt from "jsonwebtoken";
import "dotenv/config";

const verifytoken = (req, res, next) => {
  const token = req.cookies["token"];

  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_TOKEN, (err, decodedToken) => {
    // console.log(decodedToken, ">>>>>>>>>>>>>>.decodedToken");
    if (err) {
      console.error("JWT verification failed:", err);
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    req.user = decodedToken;
    next();
  });
};

export { verifytoken };
