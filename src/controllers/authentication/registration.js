const bcrypt = require("bcrypt");
const UserModel = require("../../schemas/userSchema");

const userRegistration = async (req, res) => {
   try {
      const { name, email, password, role, phone } = req.body;

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const user = new UserModel({
         name,
         email,
         role,
         phone,
         password: hashedPassword,
      });

      // Save user to database
      await user.save();

      res.status(201).json({ message: "User registered successfully" });
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

module.exports = userRegistration;
