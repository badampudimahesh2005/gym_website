const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).send("you are not authenticated");
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
        if (err) return res.status(403).send("token is not valid");
        req.userId = payload.id;
        next();
    }); 
   

    
};

const isLoggedIn = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Unauthorized' });

    const token = authorization.split(' ')[1]; // Extract token from header

    try{
        const {_id} = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findOne({_id}).select("_id");
        next();

    }catch(err){
        return res.status(401).json({error:"Request is not authorized" });
    }

   
};

const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        return next();
    }
    return res.status(403).json({ message: 'Forbidden' });
};

module.exports = { isLoggedIn, isAdmin, verifyToken };