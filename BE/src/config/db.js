
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const mongoURI = process.env.MONGODB_URI 

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI),
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }

};

module.exports = connectDB;
