import "./cajita.css";
import { useState } from "react";

export default function EventosFull() {
  const [numero, setNumero] = useState(0);
  const [active, setActive] = useState(false);
  const handleClick = (e) => {
    setNumero(numero + 1);
    console.log("Numero +1");
  };
  const handleContextMenu = (e) => {
    e.preventDefault();
    console.log("Click derecho dentro");
  };
  const handleMouseEnter = (e) => {
    console.log("Above on box");
    e.target.style.backgroundColor = "blue";
    e.target.classList.add("noNotice");
    setActive(true);
  };
  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "red";
    e.target.classList.remove("noNotice");
    setActive(false);
  };
  return (
    <>
      <div onContextMenu={handleContextMenu}>
        <h3>Eventos full</h3>
        <p>Click right on the mouse just here</p>
        <p>{numero}</p>
        <button onClick={handleClick}>+1</button>
      </div>
      <h3>Uso de onMouse</h3>
      <div
        className="box"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {active && <p>Holaaaa</p>}
      </div>
    </>
  );
}
