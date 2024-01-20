const UserModel = require("../../schemas/userSchema");

const enrollCourse = async (req, res) => {
   try {
      const enrollmentInfo = req.body;
      const { userId } = req.query;
      await UserModel.updateOne(
         { _id: userId },
         {
            $push: { enrolled: enrollmentInfo },
         }
      );
      res.status(201).json({ message: "Enroll successful" });
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

// Export function
module.exports = enrollCourse;
