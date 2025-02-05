const express = require("express");
const connectDB = require("./config/db");
const dataRoutes = require("./routes/dataRoutes");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
/* app.use(express.urlencoded({ extended: true })); // Allows text field processing */
const PORT = process.env.PORT || 2000;

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/data", dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
