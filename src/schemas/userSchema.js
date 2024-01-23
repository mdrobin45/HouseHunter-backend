const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
   {
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      phone: { type: Number, required: true },
      role: { type: String, required: true },
   },
   { timeStamp: true }
);

// User model
const UserModel = mongoose.model("Users", userSchema);

// Export model
module.exports = UserModel;
