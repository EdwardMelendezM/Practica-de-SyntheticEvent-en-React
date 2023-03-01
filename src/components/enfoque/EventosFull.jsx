import { useState } from "react";

export default function EventosFull() {
  const [numero, setNumero] = useState(0);
  const handleClick = (e) => {
    setNumero(numero + 1);
    console.log("Numero +1");
  };
  const handleContextMenu = (e) => {
    e.preventDefault();
    console.log("Click derecho dentro");
  };
  return (
    <div onContextMenu={handleContextMenu}>
      <h3>Eventos full</h3>
      <p>{numero}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}
