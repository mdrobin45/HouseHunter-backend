const UserModel = require("../../schemas/userSchema");

const markAsComplete = async (req, res) => {
   try {
      const { email, courseId } = req.query;
      const user = await UserModel.findOne({
         email,
         enrolled: { $elementMatch: { corse: courseId } },
      });
      res.status(200).send(user);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

// Export function
module.exports = markAsComplete;
