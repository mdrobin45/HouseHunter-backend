const express = require("express");
const insertMultiple = require("../controllers/courses/insertMulple");
const getCourses = require("../controllers/courses/getCourse");
const sortCourses = require("../controllers/courses/sortCourse");
const getById = require("../controllers/courses/getById");
const courseRoute = express.Router();

// Sort courses
courseRoute.get("/sort", sortCourses);

// Get course by id
courseRoute.get("/:id", getById);

// Get courses
courseRoute.get("/", getCourses);
// Insert multiple courses
courseRoute.post("/multiple", insertMultiple);

// Export route
module.exports = courseRoute;
