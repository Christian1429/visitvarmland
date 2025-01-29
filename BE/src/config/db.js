const mongoose = require('mongoose');
require('dotenv').config();

// Delete this later // see readme in FE
const mongoURI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/turid';

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