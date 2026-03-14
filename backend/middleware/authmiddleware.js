// middleware/authMiddleware.js

const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        next(); // ✅ session exists, allow request
    } else {
        res.status(401).json({ message: "Unauthorized. Please login." });
    }
};

module.exports = isAuthenticated;