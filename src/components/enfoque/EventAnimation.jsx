import React from "react";
import "./animation.css";

function EventAnimation() {
  const handleAnimationStart = () => {
    console.log("La animación ha comenzado");
  };

  const handleAnimationEnd = () => {
    console.log("La animación ha terminado");
  };

  const handleAnimationIteration = () => {
    console.log("La animación ha repetido");
  };

  return (
    <div className="App">
      <div
        className="box"
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={handleAnimationEnd}
        onAnimationIteration={handleAnimationIteration}
      ></div>
    </div>
  );
}

export default EventAnimation;
