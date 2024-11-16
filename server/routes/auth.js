// routes/auth.js
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');

const maxAge = 3 * 24 * 60 * 60*1000;

const createToken = (email, id) => {
    return jwt.sign({email, id}, process.env.JWT_SECRET, {
        expiresIn: maxAge,
    });
}


// Register Route
router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password,age, height,gender,weight } = req.body;
        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'Email already in use' });

        const newUser = new User({ firstName, lastName, email, password,age, height,gender,weight });
        await newUser.save();

        res.cookie("jwt", createToken(email,newUser.id), {
            maxAge: maxAge,
            secure: true,
            sameSite    : "None",

        });
        res.status(201).json(
            {
                id: newUser.id,
                email: newUser.email,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                age: newUser.age,
                height: newUser.height,
                weight: newUser.weight,
                gender: newUser.gender
            }
        );
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Email not found'});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

            res.cookie("jwt", createToken(email,user.id), {
                maxAge: maxAge,
                secure: true,
                sameSite    : "None",
                });
                res.status(200).json(
                    {
                        id: user.id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        age: user.age,
                        height: user.height,
                        weight: user.weight,
                        gender: user.gender
                    }
                );
                } catch (error) {
                    res.status(500).json({ message: 'Server error' });
                }
                });
                

                    

// Logout Route
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ message: 'Logout failed' });
        res.json({ message: 'Logged out successfully' });
    });
});

module.exports = router;
