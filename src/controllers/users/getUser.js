const UserModel = require("../../schemas/userSchema");

const getUser = async (req, res) => {
   try {
      const { email } = req.query;
      const response = await UserModel.findOne({ email });
      res.status(200).send(response);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

// Export function
module.exports = getUser;
