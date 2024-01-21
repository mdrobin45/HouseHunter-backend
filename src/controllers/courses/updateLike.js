const CourseModel = require("../../schemas/courseSchema");
const updateLike = async (req, res) => {
   try {
      const { courseId } = req.query;
      await CourseModel.findOneAndUpdate(
         { _id: courseId },
         {
            $inc: { like: 1 },
         }
      );
      res.status(201).json({ messaged: "Updated" });
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

// Export function
module.exports = updateLike;
