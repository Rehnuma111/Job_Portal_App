import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Authorization header missing or malformed",
        success: false,
      });
    }

    // Extract token from Authorization header
    const token = authHeader.split(" ")[1];
    console.log("Received token:", token);

    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Attach user ID to request object
    req.id = decoded.userId;

    next(); // Proceed to next middleware/controller
  } catch (error) {
    console.error("Authentication failed:", error.message);

    let message = "Authentication failed";
    if (error.name === "TokenExpiredError") message = "Token expired";
    else if (error.name === "JsonWebTokenError") message = "Invalid token";

    return res.status(401).json({
      message,
      success: false,
    });
  }
};

export default isAuthenticated;
