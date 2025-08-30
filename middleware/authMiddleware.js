import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.send("No token provided")
  }
  jwt.verify(token, process.env.SECRET_JWT, (err, user) => {
    if (err) return res.send("Invalid token");
    req.user = user;
    next();
  })
}

// module.exports = authMiddleware;