const express = require("express");
const insertMultiple = require("../controllers/courses/insertMulple");
const getCourses = require("../controllers/courses/getCourse");
const sortCourses = require("../controllers/courses/sortCourse");
const getById = require("../controllers/courses/getById");
const enrollCourse = require("../controllers/courses/enrollCourse");
const markAsComplete = require("../controllers/courses/markAsComplete");
const updateLike = require("../controllers/courses/updateLike");
const addHouse = require("../controllers/house/addHouse");
const houseRoute = express.Router();

// Get course by id
houseRoute.get("/:id", getById);

// add new house
houseRoute.post("/add-new", addHouse);

// Insert multiple courses
houseRoute.post("/multiple", insertMultiple);

// Export route
module.exports = houseRoute;
