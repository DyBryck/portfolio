import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // eslint-disable-line
        pass: process.env.GMAIL_PASS, // eslint-disable-line
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER, // eslint-disable-line
      subject: "Message du portfolio",
      text: `
        Nom: ${name}
        Email: ${email}
        Message: ${message}
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

  return res.status(405).json({ message: "Méthode non autorisée." });
}
