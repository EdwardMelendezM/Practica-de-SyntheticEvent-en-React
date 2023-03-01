import { useState } from "react";

export default function EventOnKeyDown() {
  const [statusCopy, setStatusCopy] = useState(true);
  const [value, setValue] = useState("F08");

  const handleOnKeyDown = (e) => {
    if (e.key == "Enter") {
      navigator.clipboard.writeText(value);
      console.log("Texto  copiado");
      setStatusCopy(false);
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleOnPaste = (e) => {
    setStatusCopy(true);
    console.log("Texto pegado");
  };
  return (
    <div>
      <h3>onKeyDown</h3>
      <p>
        onKeyDown: se activa cuando el usuario presiona una tecla. Este evento
        se activa una sola vez cuando la tecla se presiona, incluso si el
        usuario mantiene la tecla presionada.
      </p>
      <p>
        <small>
          {statusCopy ? "Press enter for copy!!" : "Paste your text"}
        </small>
      </p>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
      />
      <input type="text" onPaste={handleOnPaste} />
    </div>
  );
}
