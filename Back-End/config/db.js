const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 15000,
      connectTimeoutMS: 15000,
    });
    console.log("✅ MongoDB connected to the database");
  } catch (error) {
    console.error("❌ Error connecting to the database:", error.message);
    throw error;
  }
};

module.exports = connectDB;