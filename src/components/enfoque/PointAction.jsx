import React, { useState } from "react";

function PointAction() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePointerDown = () => {
    setIsPressed(true);
  };

  const handlePointerMove = () => {
    if (isPressed) {
      console.log("Pointer is moving");
    }
  };

  const handlePointerUp = () => {
    setIsPressed(false);
  };

  const handlePointerCancel = () => {
    setIsPressed(false);
  };

  return (
    <>
      <h3>onPointerDown, move, up, cancel</h3>
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        style={{
          width: "200px",
          height: "200px",
          background: "gray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        Press and move your pointer here
      </div>
    </>
  );
}

export default PointAction;
