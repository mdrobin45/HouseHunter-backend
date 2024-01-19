const CourseModel = require("../../schemas/courseSchema");
const insertMultiple = async (req, res) => {
   try {
      const courseDetails = req.body;
      await CourseModel.insertMany(courseDetails);
      res.status(201).json({ message: "Course inserted" });
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

// Export function
module.exports = insertMultiple;
