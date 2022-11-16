//Init parameter env
require("dotenv").config();
//connectDB
const { connectDB } = require("./configs/db");
connectDB();

const express = require("express");

const cors = require("cors");

const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");
const { register } = require("./controllers/authController");

const app = express();
//LinkBF
app.use(cors());
//Body Parser
app.use(express.json());
//Mount the route
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/posts", postRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
