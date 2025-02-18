const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const patientRoutes = require("./routes/patients");  // Import routes

dotenv.config();  // Load environment variables

const app = express();
app.use(express.json());  // Middleware to parse JSON

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((error) => console.error("❌ MongoDB Connection Failed:", error));

// Use patient routes
app.use("/api", patientRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
