const express = require("express");
const app = express();
const path = require("path");
const serveStatic = require("serve-static");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const db = require("./models");

app.use(express.json());

db.mongoose
  .connect("mongodb://127.0.0.1:27017/Troc", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.post("/sendmail", (req, res) => {
  // Get email data from the request body
  const { to, subject, text } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // e.g., 'Gmail'
    auth: {
      user: "troctwin@gmail.com",
      pass: "eldcqonjtbfyugvm",
    },
  });

  // Email data
  const mailOptions = {
    from: "troctwin@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      res
        .status(500)
        .json({ error: "An error occurred while sending the email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});
const twilioClient = twilio(
  "AC474e8c64543cf0e5f56f86920ff01774",
  "96513aefbb1a8b6c5a902237647afd81"
);
app.post("/sendsms", (req, res) => {
  const { to, text } = req.body;
  twilioClient.messages
  .create({
    to: to, // The recipient's phone number
    from: "+12563843938", // Your Twilio phone number
    body: text, // The message text
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
});
const mailHistoryRoutes = require("./routes/mailHistory.routes")(app);
const smsHistoryRoutes = require("./routes/smsHistory.routes")(app);

const rootPath = path.join(__dirname, "public"); // replace 'public' with the name of your root directory

app.use(serveStatic(rootPath));

app.use(express.static(rootPath));

// Define a simple test route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
