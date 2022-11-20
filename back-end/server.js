//Init parameter env
require("dotenv").config();
//connectDB
const { connectDB } = require("./configs/db");
connectDB();

const express = require("express");

const cors = require("cors");

const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");

const { errorHandler } = require("./middlewares/errorHandler");

const { register } = require("./controllers/authController");

const app = express();
//LinkBF
app.use(cors());
//Body Parser
app.use(express.json());
//Mount the route
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/posts", postRoute);

// Unhandle route
app.all("*", (req, res, next) => {
  const err = new Error("The route can not be found");
  err.statusCode = 404;
  next(err);
});
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
