const mongoose = require("mongoose");

const MailHistory = mongoose.model(
  "MailHistory",
  new mongoose.Schema({
    UserEmail: { type: String, required: true },
    EmailText: { type: String, required: true },
    addDate: { type: Date, default: Date.now },
  })
);

module.exports = MailHistory;
