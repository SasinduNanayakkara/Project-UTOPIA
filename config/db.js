const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGO_URI);
        if (dbConnection) {
            console.log('MongoDB Connected...');
        }
    }
    catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;