export default function EventOnErrorOnLoad() {
  const handleImageError = (e) => {
    console.log("Error al cargar la imagen");
  };
  const handleImageLoad = (e) => {
    console.log("Imagen cargada correctamente");
  };
  return (
    <div>
      <h3>onError y onLoad</h3>
      <p>
        El evento <b>onError </b> se dispara cuando la carga de una imagen
        falla, mientras que el evento <b>onLoad </b> se dispara cuando la carga
        de una imagen se completa correctamente.
      </p>
      <img
        src="/src/assets/react.svg"
        alt="raaa"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
      <img
        src="/src/assets/react.svgs"
        alt="raaa"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
}
