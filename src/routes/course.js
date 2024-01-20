const express = require("express");
const insertMultiple = require("../controllers/courses/insertMulple");
const getCourses = require("../controllers/courses/getCourse");
const sortCourses = require("../controllers/courses/sortCourse");
const courseRoute = express.Router();

// Sort courses
courseRoute.get("/sort", sortCourses);

// Get courses
courseRoute.get("/", getCourses);
// Insert multiple courses
courseRoute.post("/multiple", insertMultiple);

// Export route
module.exports = courseRoute;
