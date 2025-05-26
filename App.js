const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const ConnectionDB = require('./Config/MongoDBConnection');
const userRoutes = require('./Routes/UserRoutes');

// Middleware to handle CORS and JSON body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//MongoDB connection
ConnectionDB();

// Importing user routes
app.use('/api', userRoutes);
app.use('/api', userRoutes);


// Server listening on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

