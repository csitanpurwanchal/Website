const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const noticeRoutes = require("./routes/noticeRoutes");

dotenv.config(); // Load environment variables from .env file

const app = express(); // Initialize the app

// Enable CORS for frontend
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" })); // Frontend running on localhost:3000

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/api/notices", noticeRoutes);

// Set the port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
