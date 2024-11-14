const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./library/database');
const todoRoutes = require('./routers/todoRoutes');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(5001, () => console.log("Backend is running on port 5001"));
