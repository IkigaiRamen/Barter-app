const SmsHistory = require("../models/smsHistory.model");
const twilio = require("twilio");

// Create a new SMS history entry
exports.create = async (req, res) => {
  const { UserPhoneNumber, SmsText } = req.body;

  // Create a new SMS history object
  const smsHistory = new SmsHistory({
    UserPhoneNumber,
    SmsText,
  });

  // Save the SMS history object to the database
  smsHistory
    .save()
    .then((data) => {
  twilioClient.messages
  .create({
    to: UserPhoneNumber, // The recipient's phone number
    from: "+12563843938", // Your Twilio phone number
    body: SmsText, // The message text
  })
  .then((message) => {
    console.log("SMS sent:", message.sid);
    // Handle success
    res.status(200).json({ message: "Email and SMS sent successfully" });
  })
  .catch((error) => {
    console.error("Error sending SMS:", error);
    res.status(500).json({ error: "An error occurred while sending SMS" });
  });

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "An error occurred while creating the SMS history entry.",
      });
    });
};

// Get all SMS history entries
exports.findAll = (req, res) => {
  SmsHistory.find()
    .then((smsHistory) => {
      res.send(smsHistory);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving SMS history entries.",
      });
    });
};

// Get a specific SMS history entry by ID
exports.findOne = (req, res) => {
  const { id } = req.params;

  SmsHistory.findById(id)
    .then((smsHistory) => {
      if (!smsHistory) {
        return res.status(404).send({
          message: `SMS history entry with id ${id} was not found.`,
        });
      }
      res.send(smsHistory);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `SMS history entry with id ${id} was not found.`,
        });
      }
      return res.status(500).send({
        message: `Error retrieving SMS history entry with id ${id}`,
      });
    });
};

// Update an SMS history entry by ID
exports.update = (req, res) => {
  const { id } = req.params;
  const { UserPhoneNumber, SmsText } = req.body;

  SmsHistory.findByIdAndUpdate(
    id,
    {
      UserPhoneNumber,
      SmsText,
    },
    { new: true }
  )
    .then((smsHistory) => {
      if (!smsHistory) {
        return res.status(404).send({
          message: `SMS history entry with id ${id} was not found.`,
        });
      }
      res.send(smsHistory);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `SMS history entry with id ${id} was not found.`,
        });
      }
      return res.status(500).send({
        message: `Error updating SMS history entry with id ${id}`,
      });
    });
};

// Delete an SMS history entry by ID
exports.delete = (req, res) => {
  const { id } = req.params;

  SmsHistory.findByIdAndRemove(id)
    .then((smsHistory) => {
      if (!smsHistory) {
        return res.status(404).send({
          message: `SMS history entry with id ${id} was not found.`,
        });
      }
      res.send({ message: "SMS history entry was deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `SMS history entry with id ${id} was not found.`,
        });
      }
      return res.status(500).send({
        message: `Could not delete SMS history entry with id ${id}`,
      });
    });
};
