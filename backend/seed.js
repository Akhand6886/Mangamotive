const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Post = require("./models/Post"); // Replace with your Post model path

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const seedData = [
  {
    title: "Attack on Titan",
    description: "The CSS Grid Layout Module offers a grid-based layout system...",
    category: "Fantasy",
    createdAt: new Date(),
  },
  {
    title: "Dr. Stone",
    description: "A scientific approach to surviving in a world turned to stone...",
    category: "Science",
    createdAt: new Date(),
  },
];

const seedDatabase = async () => {
  try {
    await Post.deleteMany(); // Clear existing data
    await Post.insertMany(seedData);
    console.log("Database seeded successfully!");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedDatabase();
