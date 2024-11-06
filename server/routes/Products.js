
const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// GET all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// POST a new product
router.post('/', async (req, res) => {
  try {
      const { name, description, price, image, category, inStock } = req.body;

      // Create a new product
      const product = new Product({
          name,
          description,
          price,
          image,
          category,
          inStock,
      });

      // Save the product to the database
      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
  } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ error: "Failed to add product" });
  }
});

// GET a product by ID
router.get('/:id',  async (req, res) => {
  try {
      const product = await Product.findById(req.params.id);
      if (!product) return res.status(404).json({ message: "Product not found" });
      res.json(product);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
  }
});

// // PUT (update) a product by ID
// router.put('/:id', async (req, res) => {
//   const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updatedProduct);
// });

// // DELETE a product by ID
// router.delete('/:id', async (req, res) => {
//   await Product.findByIdAndDelete(req.params.id);
//   res.status(204).send();
// });

module.exports = router;
