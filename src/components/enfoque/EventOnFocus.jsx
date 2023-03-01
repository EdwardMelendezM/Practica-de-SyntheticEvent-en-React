import { useEffect, useRef, useState } from "react";

export default function EventOnFocus() {
  const newValue = {
    id: crypto.randomUUID(),
    text: "-",
  };
  const [data, setData] = useState([
    {
      id: crypto.randomUUID(),
      text: "Primer texto",
    },
  ]);
  const handleChange = (e, item) => {
    const temp = [...data];
    const editItem = temp.find((i) => i.id === item.id);
    editItem.text = e.target.value;
    setData([...temp]);
    setCurrentItem(item);
  };
  const handleOnFocus = (e) => {
    console.log("Hiciste focus");
  };
  const handleOnBlur = () => {
    setIsEdit(false);
  };
  const create = () => {
    setData([...data, newValue]);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      create();
    }
  };

  return (
    <div>
      <h3>onFocus</h3>
      <p>
        onFocus: se activa cuando un elemento de formulario gana el foco, es
        decir, cuando el usuario hace clic en él o lo selecciona con la tecla
        Tab.
      </p>
      <h3>onBlur</h3>
      <p>
        onBlur: se activa cuando un elemento de formulario pierde el foco, es
        decir, cuando el usuario hace clic en otro elemento o lo selecciona con
        la tecla Tab.
      </p>
      <div>
        {data.map((item) => (
          <input
            key={item.id}
            type="text"
            onChange={(e) => handleChange(e, item)}
            onKeyDown={handleKeyDown}
            onBlur={handleOnBlur}
            value={item.text}
            onFocus={handleOnFocus}
          />
        ))}
      </div>
    </div>
  );
}
