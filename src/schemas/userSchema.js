const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
   {
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      enrolled: [
         {
            complete: { type: Number, default: 0 },
            dueDate: { type: String },
            course: { type: mongoose.Types.ObjectId, ref: "Courses" },
         },
      ],
   },
   { timeStamp: true }
);

// User model
const UserModel = mongoose.model("Users", userSchema);

// Export model
module.exports = UserModel;
