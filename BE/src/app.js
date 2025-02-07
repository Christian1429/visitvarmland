const express = require("express");
const connectDB = require("./config/db");
const dataRoutes = require("./routes/dataRoutes");
require("dotenv").config();
const cors = require("cors");
const createNewRecord = require("./utils/createDummyData");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cors());
const PORT = process.env.PORT || 2000;

// Connect to MongoDB
connectDB();
/* createNewRecord(); */
// Middleware
app.use(express.json());

// Routes
app.use("/api/data", dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
