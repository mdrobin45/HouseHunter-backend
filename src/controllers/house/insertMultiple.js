const HouseModel = require("../../schemas/houseSchema");

const insertMultiple = async (req, res) => {
   try {
      const houseData = req.body;
      await HouseModel.insertMany(houseData);
      res.status(201).json({ message: "Course inserted" });
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

// Export function
module.exports = insertMultiple;
