// import jwt from "jsonwebtoken";
// import "dotenv/config";

// const verifytoken = (req, res, next) => {
//   const token = req.cookies["access_token"];
//   if (token) {
//     const user = jwt.verify(token, process.env.JWT_TOKEN);
//     return res.status(500).json({ token: token, user: user });
//   }
//   jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
//     if (err) return res.status(403).json("Token is not valid!");
//     req.user = user;
//     next();
//   });
// };

// export { verifytoken };

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifytoken = (req, res, next) => {
  const token = req.cookies["access_token"];
  console.log(token, "token>>>>>>>>>>>>>>>>>>>>>>");
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }
    req.user = decoded;
    next();
  });
};

export { verifytoken };
