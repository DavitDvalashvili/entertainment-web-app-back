import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  // If token is not present, return a 401 Unauthorized error using the errorHandler function
  if (!token)
    return res.status(401).json({ message: "you are not authorized" });

  // Verify the token using jwt.verify method
  jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "forbidden" });
    }
    // If verification is successful, attach the user object to the request
    req.user = user;
    next();
  });
};
