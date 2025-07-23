import nodemailer from "nodemailer";
import sanitizeHtml from "sanitize-html";
import validator from "validator";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée." });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Adresse email invalide." });
  }

  const cleanName = sanitizeHtml(name, {
    allowedTags: [],
    allowedAttributes: {},
  }).trim();

  const cleanMessage = sanitizeHtml(message, {
    allowedTags: [],
    allowedAttributes: {},
  }).trim();

  const cleanEmail = email.trim();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: cleanEmail,
    to: process.env.GMAIL_USER,
    subject: "Message du portfolio",
    text: `
      Nom: ${cleanName}
      Email: ${cleanEmail}
      Message: ${cleanMessage}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur d'envoi d'email :", error);
    return res.status(500).json({
      message: "Erreur lors de l'envoi de l'email.",
      error: error.message,
    });
  }
}
