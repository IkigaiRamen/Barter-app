const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.mailHistory = require("./mailHistory.model");
db.SmsHistory = require("./smsHistory.model");

module.exports = db;
