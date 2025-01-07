// src/api/contact.js
import mongoose, { Schema } from "mongoose";
import Cookies from 'universal-cookie';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Set the AWS Region and Credentials from environment variables.
const REGION = "us-east-1";
const sesClient = new SESClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_SES_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
  },
});

// Define the Contact Form Schema
const contactFormSchema = new Schema({
  industry: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  description: { type: String, required: true },
  nda: { type: Boolean, default: false },
  referrerId: { type: String, default: null },
  referrerOrganizationName: { type: String, default: null },
  referrerEmail: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
});

// Define the Referrer Schema
const referrerSchema = new Schema({
  referrerId: { type: String, required: true, unique: true },
  orgName: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create Mongoose Models
const ContactForm = mongoose.models.ContactForm || mongoose.model("ContactForm", contactFormSchema);
const Referrer = mongoose.models.Referrer || mongoose.model("Referrer", referrerSchema);

// Connect to MongoDB
if (!mongoose.connection.readyState) {
  mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@strawberrylabs.conqfzr.mongodb.net/strawberrylabs?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => {
    console.log("Connected to MongoDB successfully.");
  }).catch((error) => {
    console.error("MongoDB connection error:", error);
  });
}

// Helper function to format email content
const formatEmailContent = (data) => {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Industry:</strong> ${data.industry}</p>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Description:</strong> ${data.description}</p>
    <p><strong>NDA:</strong> ${data.nda ? "Yes" : "No"}</p>
    ${data.referrerOrganizationName ? `<p><strong>Referrer Organization:</strong> ${data.referrerOrganizationName}</p>` : ""}
    ${data.referrerEmail ? `<p><strong>Referrer Email:</strong> ${data.referrerEmail}</p>` : ""}
  `;
};

// Function to create SES SendEmailCommand
const createSendEmailCommand = (toAddress, fromAddress, subject, htmlBody, textBody) => {
  return new SendEmailCommand({
    Destination: {
      ToAddresses: [toAddress],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlBody,
        },
        Text: {
          Charset: "UTF-8",
          Data: textBody,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [fromAddress],
  });
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: "Method not allowed" });
  }

  const cookies = new Cookies(req.headers.cookie);
  let parsedBody;

  try {
    parsedBody = JSON.parse(req.body);
  } catch (error) {
    return res.status(400).json({ error: "Invalid JSON format" });
  }

  const { token, ...formData } = parsedBody;
  const captchaSecret = process.env.RECAPTCHA_SECRET_KEY;

  if (!captchaSecret) {
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    // Verify reCAPTCHA
    const captchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${captchaSecret}&response=${token}`,
      }
    );

    const captchaJson = await captchaResponse.json();

    if (!captchaJson.success) {
      return res.status(400).json({
        error: "Captcha verification failed",
        details: captchaJson
      });
    }

    // Handle Referrer Information
    if (cookies.get("referrerId")) {
      const refId = cookies.get("referrerId");
      const referrer = await Referrer.findOne({ referrerId: refId }).exec();

      if (referrer) {
        formData.referrerId = refId;
        formData.referrerOrganizationName = referrer.orgName;
        formData.referrerEmail = referrer.email;
      }
    }

    // Save Contact Form Data to Database
    const contactFormDoc = new ContactForm(formData);
    await contactFormDoc.save();

    // Prepare Email Content
    const emailHtml = formatEmailContent(formData);
    const emailText = `
      New Contact Form Submission
      Industry: ${formData.industry}
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Description: ${formData.description}
      NDA: ${formData.nda ? "Yes" : "No"}
      ${formData.referrerOrganizationName ? `Referrer Organization: ${formData.referrerOrganizationName}` : ""}
      ${formData.referrerEmail ? `Referrer Email: ${formData.referrerEmail}` : ""}
    `;

    // Create SES SendEmailCommand
    const sendEmailCommand = createSendEmailCommand(
      "chirag@strawberrylabs.net", // To Address
      "notifications@strawberrylabs.net", // From Address
      "New Contact Form Submission", // Subject
      emailHtml, // HTML Body
      emailText // Text Body
    );

    // Send Email via SES
    await sesClient.send(sendEmailCommand);
    console.log("Email sent successfully to chirag@strawberrylabs.net.");

    return res.status(200).json({ message: "Form submitted successfully." });

  } catch (error) {
    console.error("Error processing form submission:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
