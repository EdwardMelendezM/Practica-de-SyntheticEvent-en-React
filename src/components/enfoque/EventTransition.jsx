import React, { useState } from "react";
import "./transition.css";

function EventTransition() {
  const [showBox, setShowBox] = useState(false);

  const handleTransitionEnd = () => {
    console.log("La transición ha terminado");
    setShowBox(false);
  };

  const handleClick = () => {
    setShowBox(true);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Mostrar caja</button>
      {showBox && (
        <div className="boxx" onTransitionEnd={handleTransitionEnd}>
          Esta es una caja con transición
        </div>
      )}
    </div>
  );
}

export default EventTransition;
