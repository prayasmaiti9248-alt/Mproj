const express = require("express");
const router = express.Router();
const Product = require("../backend/models/Product");

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Seed products (run once)
router.get("/seed", async (req, res) => {
  await Product.deleteMany();

  const products = [
    {
      name: "Headphones",
      price: 1999,
      image: "/images/headphones.avif",
      description: "High quality over-ear headphones"
    },
    {
      name: "Earbuds",
      price: 1499,
      image: "/images/earbuds.avif",
      description: "Wireless earbuds with deep bass"
    },
    {
      name: "Power Bank",
      price: 999,
      image: "/images/powerbank.avif",
      description: "10000mAh fast charging power bank"
    },
    {
      name: "Phone Cover",
      price: 299,
      image: "/images/phncover.avif",
      description: "Stylish protective phone cover"
    },
    {
      name: "Charger",
      price: 499,
      image: "/images/charger.avif",
      description: "Fast charging adapter"
    },
    {
      name: "Data Cable",
      price: 199,
      image: "/images/datacable.avif",
      description: "Durable USB cable"
    },
    {
      name: "Screen Guard",
      price: 199,
      image: "/images/sprot.avif",
      description: "Tempered glass protection"
    },
    {
      name: "Lens Protector",
      price: 149,
      image: "/images/lensprot.avif",
      description: "Camera lens protection"
    },
    {
      name: "Screen Wipes",
      price: 99,
      image: "/images/swipe.avif",
      description: "Cleaning wipes for screens"
    }
  ];

  await Product.insertMany(products);
  res.send("Products Seeded!");
});

module.exports = router;