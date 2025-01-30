const express = require("express");
const connectDB = require("./config/db");
const dataRoutes = require("./routes/dataRoutes");
require("dotenv").config();
const cors = require("cors");
const createNewRecord = require("./utils/createDummyData");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 2000;

// Connect to MongoDB
connectDB();
createNewRecord();
// Middleware
app.use(express.json());

// Routes
app.use("/api/data", dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
g;
