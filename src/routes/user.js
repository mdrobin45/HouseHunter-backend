const express = require("express");
const getUser = require("../controllers/users/getUser");
const userRoute = express.Router();

// Get user
userRoute.get("/", getUser);

// Export route
module.exports = userRoute;
