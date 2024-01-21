const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
   name: { type: String, required: true },
   instructor: { type: String, required: true },
   enrollmentStatus: { type: String, required: true },
   thumbnail: { type: String, required: true },
   duration: { type: String, required: true },
   schedule: { type: String, required: true },
   location: { type: String, required: true },
   prerequisites: { type: Array, required: true },
   syllabus: { type: Array, required: true },
   students: { type: Number, required: true },
   description: { type: String, required: true },
   price: { type: Number, required: true },
   like: { type: Number, default: 0 },
});

// Course model
const CourseModel = mongoose.model("Courses", courseSchema);

// Export model
module.exports = CourseModel;
