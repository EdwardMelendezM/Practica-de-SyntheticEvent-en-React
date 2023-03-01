import React, { useState } from "react";

function EventForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleEmailInvalid(event) {
    setEmailError("Ingrese un correo electrónico válido");
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Lógica para enviar el correo electrónico al servidor
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Correo electrónico:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          onInvalid={handleEmailInvalid}
        />
      </label>
      {emailError && <p>{emailError}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default EventForm;
