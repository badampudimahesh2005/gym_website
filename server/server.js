const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productsRoutes = require("./routes/Products");
const cors = require("cors");
dotenv.config();

const app = express();

// Configure CORS
app.use(cors({
    origin: [process.env.ORIGIN], // Ensure this is set correctly
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
}));

app.use(express.json()); // For parsing JSON bodies

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

// Define a test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use('/api/products', productsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});