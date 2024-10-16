import { useState } from "react";

const CardForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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
        setStatus("Email envoyé avec succès", data);
      } else {
        setStatus("Erreur lors de l'envoi de l'email");
      }
    } catch (error) {
      setStatus("Erreur lors de l'envoi du message", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="col-span-6 row-span-3 flex flex-col items-center rounded-lg bg-white/20 p-4 shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 md:col-span-2 lg:col-span-3 dark:bg-black/20">
      <h2 className="mb-4 text-xl font-bold">Contactez-moi</h2>
      <form
        onSubmit={handleSubmit}
        className="flex h-full w-full flex-col gap-5"
      >
        <label className="flex flex-col">
          <input
            type="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Votre nom"
            className="rounded-lg p-1 dark:bg-black/40"
          />
        </label>
        <label className="flex flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Votre email"
            className="rounded-lg p-1 dark:bg-black/40"
          />
        </label>
        <label className="flex flex-col">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Message"
            className="h-56 resize-none rounded-lg p-1 dark:bg-black/40"
          ></textarea>
        </label>
        <button
          type="submit"
          className="h-10 w-1/2 self-center rounded-lg bg-white transition-all duration-150 active:scale-90 dark:bg-black/30"
          disabled={isLoading}
        >
          Envoyer
        </button>
      </form>
      {isLoading && <p>Envoi en cours...</p>}
      {status && <p>{status}</p>}
    </div>
  );
};

export default CardForm;
