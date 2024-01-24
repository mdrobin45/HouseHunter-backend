const express = require("express");
const addHouse = require("../controllers/house/addHouse");
const insertMultiple = require("../controllers/house/insertMultiple");
const getById = require("../controllers/house/getById");
const houseRoute = express.Router();

// Get course by id
houseRoute.get("/:id", getById);

// add new house
houseRoute.post("/add-new", addHouse);

// Insert multiple courses
houseRoute.post("/multiple", insertMultiple);

// Export route
module.exports = houseRoute;
