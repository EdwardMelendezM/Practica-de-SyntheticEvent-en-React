export default function EventOnKeyPress() {
  const handleOnKeyPress = (e) => {
    console.log(e.key);
  };
  return (
    <div>
      <h3>onKeyPress</h3>
      <p>
        En este ejemplo, handleKeyPress es una función que se ejecutará cuando
        el usuario presione una tecla mientras el input está enfocado.
      </p>
      <input type="text" onKeyPress={handleOnKeyPress} />
    </div>
  );
}
