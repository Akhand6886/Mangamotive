const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./library/database');
const todoRoutes = require('./routers/todoRoutes');

dotenv.config();

const app = express();
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use the trending API route
app.use('/api', trendingRoutes);

app.listen(5001, () => console.log("Backend is running on port 5001"));
