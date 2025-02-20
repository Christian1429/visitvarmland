const express = require("express");
const connectDB = require("./config/db");
const dataRoutes = require("./routes/dataRoutes");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 2000;

// Connect to MongoDB
connectDB();

// Middleware

// Routes
app.use("/api/data", dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
