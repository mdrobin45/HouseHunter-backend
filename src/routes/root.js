const express = require("express");
const rootRoute = express.Router();

rootRoute.get("/", (req, res) => {
   res.send("Server is running");
});

// Export route
module.exports = rootRoute;
