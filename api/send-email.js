import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dylan.bryckaert@gmail.com",
        pass: "wfhb wtvg yujy wmjz",
      },
    });

    const mailOptions = {
      from: email,
      to: "dylan.bryckaert@gmail.com",
      subject: "Message du portfolio",
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email envoyé avec succès !" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de l'envoi de l'email.", error });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée." });
  }
}
