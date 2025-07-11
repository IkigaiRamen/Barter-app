const express = require("express");
const router = express.Router();
const cors = require("cors");
const mailHistoryController = require("../controllers/mailHistory.controller");
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
  app.post("/mailHistory", mailHistoryController.create); // Create a new mail history entry
  app.get("/mailHistory", mailHistoryController.findAll); // Get all mail history entries
  app.get("/mailHistory/:id", mailHistoryController.findOne); // Get a specific mail history entry by ID
  app.put("/mailHistory/:id", mailHistoryController.update); // Update a mail history entry by ID
  app.delete("/mailHistory/:id", mailHistoryController.delete);
};
