const mongoose = require('mongoose');


const ConnectionDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        console.error('Exiting the process due to MongoDB connection failure');
        process.exit(1);
        
    }
}

module.exports = ConnectionDB;