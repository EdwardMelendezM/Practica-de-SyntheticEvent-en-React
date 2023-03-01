export default function EventOnKeyUp() {
  const handleOnKeyUp = (e) => {
    console.log(e);
  };
  return (
    <div onKeyUp={handleOnKeyUp}>
      <h3>onKeyUp</h3>
      <p>
        onKeyUp: se activa cuando el usuario suelta una tecla. Este evento se
        activa una sola vez cuando la tecla se suelta.
      </p>
      <input type="text" />
    </div>
  );
}
