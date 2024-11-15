const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./library/database');
const todoRoutes = require('./routers/todoRoutes');

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

// Use the trending API route
//app.use('/api', trendingRoutes);

app.listen(5001, () => console.log("Backend is running on port 5001"));
