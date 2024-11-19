const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const episodeRoutes = require('./routes/episodes');

const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = 'your_mongodb_connection_string';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use('/api', episodeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

