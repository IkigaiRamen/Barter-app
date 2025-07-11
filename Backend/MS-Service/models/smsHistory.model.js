const mongoose = require("mongoose");

const SmsHistory = mongoose.model(
  "SmsHistory",
  new mongoose.Schema({
    UserPhoneNumber: { type: String, required: true },
    SmsText: { type: String, required: true },
    addDate: { type: Date, default: Date.now },
  })
);

module.exports = SmsHistory;
