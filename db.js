// db.js
const mongoose = require('mongoose');
const config = require('./config'); // Adjust the path based on your project structure

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(config.mongoURI, connectionParams);
        console.log("Connected to the database successfully");
    } catch (error) {
        console.error(error);
        console.log("Could not connect to the database!");
    }
};
