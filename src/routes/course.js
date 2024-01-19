const express = require("express");
const insertMultiple = require("../controllers/courses/insertMulple");
const courseRoute = express.Router();

// Insert multiple courses
courseRoute.post("/multiple", insertMultiple);

// Export route
module.exports = courseRoute;
