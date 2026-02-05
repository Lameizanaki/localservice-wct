const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  // ✅ FROM REGISTER
  serviceProvider: String,  // name from register
  contactEmail: String,     // email from register
});

module.exports = mongoose.model("Service", ServiceSchema);
