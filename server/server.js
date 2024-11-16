const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productsRoutes = require("./routes/Products");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const passportConfig = require("./config/passportConfig");
const authRoutes = require("./routes/auth");
dotenv.config();


const app = express();
passportConfig(passport);

// Configure CORS
app.use(cors({
    origin: [process.env.ORIGIN], 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
}));



app.use(express.json()); // For parsing JSON bodies
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded bodies
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());


// Connect to MongoDB
const dbUrl = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}


app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use('/api/products', productsRoutes);
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});