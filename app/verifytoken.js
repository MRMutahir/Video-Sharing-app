import jwt from "jsonwebtoken";
import "dotenv/config";

const verifytoken = (req, res, next) => {
<<<<<<< HEAD
  const token = req.cookies["access_token"];
  // console.log(token, "token>>>>>>>>>>>>>>>>>>>>>>");
=======
  const token = req.cookies["token"];

  // console.log(token);

>>>>>>> 1c639db663287f033eced6fbb3d232b5a41f4928
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
<<<<<<< HEAD
  jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
=======

  // Verify the token
  jwt.verify(token, process.env.JWT_TOKEN, (err, decodedToken) => {
    // console.log(decodedToken, ">>>>>>>>>>>>>>.decodedToken");
>>>>>>> 1c639db663287f033eced6fbb3d232b5a41f4928
    if (err) {
      console.error("JWT verification failed:", err);
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
<<<<<<< HEAD
    req.user = decoded;
    // console.log(decoded, ".>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
=======
    req.user = decodedToken;
>>>>>>> 1c639db663287f033eced6fbb3d232b5a41f4928
    next();
  });
};

export { verifytoken };
