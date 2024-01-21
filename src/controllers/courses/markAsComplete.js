const UserModel = require("../../schemas/userSchema");

const markAsComplete = async (req, res) => {
   try {
      const { email, courseId } = req.query;
      const response = await UserModel.updateOne(
         {
            email,
            "enrolled.course": courseId,
         },
         {
            $set: {
               "enrolled.$.status": "completed",
               "enrolled.$.complete": 100,
            },
         }
      );
      res.status(200).send(response);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

// Export function
module.exports = markAsComplete;
