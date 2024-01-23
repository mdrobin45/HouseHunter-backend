const mongoose = require("mongoose");

const houseSchema = mongoose.Schema({
   name: { type: String, required: true },
   owner: { type: String, required: true },
   thumbnail: { type: String, required: true },
   location: { type: String, required: true },
   description: { type: String, required: true },
   prices: {
      rentPerMonth: { type: Number, required: true },
      serviceCharge: { type: Number, required: true },
      securityDeposit: { type: String, required: true },
   },
   houseDetails: {
      address: { type: String, required: true },
      flatSize: { type: String, required: true },
      floor: { type: String, required: true },
      rooms: { type: String, required: true },
      facilities: { type: String, required: true },
      additionalFacilities: { type: String, required: true },
   },
   houseOverview: {
      bond: { type: Number, required: true },
      computer: { type: Number, required: true },
      totalArea: { type: Number, required: true },
      totalFloors: { type: Number, required: true },
      carParkingSpace: { type: Number, required: true },
      airCondition: { type: Boolean, required: true },
      inDoorFeatures: { type: Array, required: true },
   },
});

// Course model
const HouseModel = mongoose.model("Courses", houseSchema);

// Export model
module.exports = HouseModel;
