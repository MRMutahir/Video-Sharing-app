import  Jwt  from "jsonwebtoken";

export  const verifytoken  = (req,res,next){
    const token  = req.body.access_token;
    if(!token)  return res.status(500).json(401, "You are not authenticated!");
}