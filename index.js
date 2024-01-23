const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
const port = process.env.PORT || 3000;
const cors = require("cors");
const database = require("./src/database");
const rootRoute = require("./src/routes/root");
const authRoute = require("./src/routes/authentication");
const userRoute = require("./src/routes/user");
const houseRoute = require("./src/routes/house");
require("dotenv").config();

// Use middleware
app.use(
   cors({
      credentials: true,
      origin: process.env.CORS_ORIGIN,
   })
);

app.use(express.json());

// Database connection
database();

// application routes
app.use("/", rootRoute);
app.use("/auth", authRoute);
app.use("/house", houseRoute);
app.use("/users", userRoute);

// Listen server
app.listen(port, () => {
   console.log(`Server is running in ${port}`);
});
