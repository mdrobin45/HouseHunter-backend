const mongoose = require("mongoose");

const houseSchema = mongoose.Schema({
   title: { type: String, required: true },
   owner: { type: String, required: true },
   thumbnail: { type: String, required: true },
   location: { type: String, required: true },
   price: { type: Number, required: true },
   bedrooms: { type: String, required: true },
   bathrooms: { type: String, required: true },
});

// Course model
const HouseModel = mongoose.model("Houses", houseSchema);

// Export model
module.exports = HouseModel;
