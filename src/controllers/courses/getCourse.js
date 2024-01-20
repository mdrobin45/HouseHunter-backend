const CourseModel = require("../../schemas/courseSchema");
const getCourses = async (req, res) => {
   try {
      const response = await CourseModel.find();
      res.status(201).send(response);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

// Export function
module.exports = getCourses;
