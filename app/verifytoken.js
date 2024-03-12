import jwt from "jsonwebtoken";

const verifytoken = (req, res, next) => {
  const token = req.cookies["access_token"];
  console.log("token", token);
  if (!token) return res.status(500).json("You are not authenticated!");
  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) return res.status(403).json("Token is not valid!");
    req.user = user;
    next();
  });
};

export { verifytoken };
