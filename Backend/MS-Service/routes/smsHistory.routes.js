const express = require("express");
const router = express.Router();
const cors = require("cors");
const smsHistoryController  = require("../controllers/smsHistory.controller");

module.exports = function (app) {
  
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      res.set("Access-Control-Allow-Origin", "http://localhost:3000");
      next();
    });
    app.use(cors());
    
    // Define routes for SmsHistory entity
    app.post("/smsHistory", smsHistoryController.create); // Create a new SMS history entry
    app.get("/smsHistory", smsHistoryController.findAll); // Get all SMS history entries
    app.get("/smsHistory/:id", smsHistoryController.findOne); // Get a specific SMS history entry by ID
    app.put("/smsHistory/:id", smsHistoryController.update); // Update an SMS history entry by ID
    app.delete("/smsHistory/:id", smsHistoryController.delete); // Delete an SMS history entry by ID
  };
  
