const MailHistory = require("../models/mailHistory.model");
const nodemailer = require("nodemailer");
const pdf = require("html-pdf");
const Handlebars = require("handlebars");
const path = require("path");
const fs = require("fs");

exports.create = async (req, res) => {
  const { UserEmail, EmailText } = req.body;

  const mailHistory = new MailHistory({
    UserEmail,
    EmailText,
  });
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
    to: UserEmail,
    subject: "Notification Email",
    text: EmailText,
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

  mailHistory
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "An error occurred while creating the mail history entry.",
      });
    });
};

exports.findAll = (req, res) => {
MailHistory.find()
  .then((mailHistory) => {
    list =[];
    mailHistory.map(e=>{
      list.push( {
        EmailText :e.EmailText,
        UserEmail:e.UserEmail,
        addDate:e.addDate
      })
      
    })
    const dd = {
      items:list,
      
    };
    
    // Render the HTML template with the data using Handlebars
    const invoiceHtml = fs.readFileSync(
      path.join(__dirname, "invoice.html"),
      "utf8"
    );
    const invoiceTemplate = Handlebars.compile(invoiceHtml);
    console.log("here");
    const html = invoiceTemplate(dd);
   
    // Generate the PDF from the HTML using html-pdf
    const options = { format: "Letter" };
    pdf.create(html, options).toStream((err, stream) => {
      if (err) return res.send(err);

      // Set the response type to PDF
      res.type("pdf");
      // Stream the PDF to the response
      stream.pipe(res);
    });
  })
  .catch((err) => {
    // Handle any errors here, such as logging or sending an error response
    res.status(500).send({
      message:
        err.message || "An error occurred while retrieving mail history entries."
    });
  });

};

exports.findOne = (req, res) => {
  const { id } = req.params;

  MailHistory.findById(id)
    .then((mailHistory) => {
      if (!mailHistory) {
        return res.status(404).send({
          message: `Mail history entry with id ${id} was not found.`,
        });
      }
      res.send(mailHistory);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Mail history entry with id ${id} was not found.`,
        });
      }
      return res.status(500).send({
        message: `Error retrieving mail history entry with id ${id}`,
      });
    });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { UserEmail, EmailText } = req.body;

  MailHistory.findByIdAndUpdate(
    id,
    {
      UserEmail,
      EmailText,
    },
    { new: true }
  )
    .then((mailHistory) => {
      if (!mailHistory) {
        return res.status(404).send({
          message: `Mail history entry with id ${id} was not found.`,
        });
      }
      res.send(mailHistory);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Mail history entry with id ${id} was not found.`,
        });
      }
      return res.status(500).send({
        message: `Error updating mail history entry with id ${id}`,
      });
    });
};

exports.delete = (req, res) => {
  const { id } = req.params;

  MailHistory.findByIdAndRemove(id)
    .then((mailHistory) => {
      if (!mailHistory) {
        return res.status(404).send({
          message: `Mail history entry with id ${id} was not found.`,
        });
      }
      res.send({ message: "Mail history entry was deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Mail history entry with id ${id} was not found.`,
        });
      }
      return res.status(500).send({
        message: `Could not delete mail history entry with id ${id}`,
      });
    });
};
