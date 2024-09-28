import { useState } from "react";

const CardForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Email envoyé avec succès !", data);
      } else {
        setStatus("Erreur lors de l'envoi de l'email.");
      }
    } catch (error) {
      setStatus("Erreur lors de l'envoi du message.", error);
    }
  };

  return (
    <div>
      <h1>Contactez-moi</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>
        <br />
        <button type="submit">Envoyer</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default CardForm;
