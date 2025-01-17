const adminAuth = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
      next(); // Proceed to next middleware or route handler
    } else {
      res.status(403).json({ message: "Forbidden. Admin access required." });
    }
  };
  
  module.exports = adminAuth;
  