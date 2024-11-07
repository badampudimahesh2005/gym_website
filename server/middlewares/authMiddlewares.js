// middleware/authMiddleware.js
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: 'Please log in to access this resource' });
};

module.exports = ensureAuthenticated;
