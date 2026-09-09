const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if token exists
    if (!authHeader) {
      return res.status(401).json({
        message: "Access denied. Please login.",
      });
    }

    // Expected format:
    // Authorization: Bearer TOKEN
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Invalid authentication token.",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store user information in request
    req.user = decoded;

    next();
  } catch (err) {
    console.log("Authentication error:", err);

    return res.status(401).json({
      message: "Invalid or expired token.",
    });
  }
};

module.exports = authMiddleware;