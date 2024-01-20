const CourseModel = require("../../schemas/courseSchema");
const sortCourses = async (req, res) => {
   try {
      const { course, instructor } = req.query;
      const response = await CourseModel.find({
         $or: [
            {
               name: { $regex: course, $options: "i" },
            },
            {
               instructor: { $regex: instructor, $options: "i" },
            },
         ],
      });
      res.status(200).send(response);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

// Export function
module.exports = sortCourses;
