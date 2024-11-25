// routes/admin.js
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Product = require('../models/Products');
const router = express.Router();
const { isLoggedIn, isAdmin } = require('../middlewares/authMiddlewares');

router.post('/add-admin', async (req, res) => {
  const { firstName, lastName, email, password, age, height, gender, weight } = req.body;

  if (!firstName || !lastName || !email || !password || !age || !height || !gender || !weight) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered." });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      age,
      height,
      gender,
      weight,
      isAdmin: true, // Explicitly setting admin role
    });

    await newUser.save();
    res.status(201).json({ message: "Admin user created successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});


//route to get all users in admin dashboard
router.get('/users', async (req, res) => {
  try {
      const users = await User.find();
      res.json(users);
  } catch (err) {
      res.status(500).json({ message: 'Error fetching users', error: err });
  }
});


//route to add a user in admin dashboard
router.post('/users', async (req, res) => {
  try {
      const { firstName, lastName, email, password,age, height,gender,weight,isAdmin } = req.body;
      const user = await User.findOne({ email });
      if (user) return res.status(400).json({ message: 'Email already in use' });

      const newUser = new User({ firstName, lastName, email, password,age, height,gender,weight ,isAdmin});
      await newUser.save();
      res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
});


//route to delete a user in admin dashboard
router.delete('/users/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const user = await User.findById(id);
      console.log(user);
      if (!user) return res.status(404).json({ message: 'User not found' });
      await user.deleteOne({ _id: id });
      res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
        }
        });

  
        router.get("/products", async(req,res)=>{
        
          try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching users', error: err });
        }

        })

module.exports = router;

