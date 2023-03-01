export default function EventMedia(params) {
  return (
    <div>
      <h3>Event Media</h3>
      <b>onAbort:</b> Se ejecuta cuando la carga de medios se interrumpe
      abruptamente, como cuando el usuario aborta la carga
      <br />
      <b>onCanPlay:</b> Se ejecuta cuando se ha descargado suficiente
      información para comenzar a reproducir el archivo de medios.
      <br />
      <b>onCanPlayThrough</b> Se ejecuta cuando se ha descargado suficiente
      información para reproducir todo el archivo de medios sin interrupciones.
      <br />
      <b>onDurationChange:</b> Se ejecuta cuando cambia la duración del archivo
      de medios, lo que puede suceder cuando se cambia la calidad del video, por
      ejemplo.
      <br />
      <b>onEmptied:</b> Se ejecuta cuando el archivo de medios se vacía y se
      interrumpe la reproducción. onEncrypted: Se ejecuta cuando se ha cifrado
      un archivo de medios y está listo para su reproducción.
      <br />
      <b>onEnded:</b> Se ejecuta cuando se completa la reproducción del archivo
      de medios. onError: Se ejecuta cuando se produce un error durante la carga
      o reproducción del archivo de medios.
      <br />
      <b>onLoadedData:</b> Se ejecuta cuando se ha cargado suficiente
      información en el buffer del archivo de medios para comenzar a
      reproducirlo.
      <br />
      <b>onLoadedMetadata:</b> Se ejecuta cuando se ha cargado la información de
      metadatos del archivo de medios, como la duración y la resolución.
      onLoadStart: Se ejecuta cuando comienza la carga del archivo de medios.
      <br />
      <b>onPause:</b> Se ejecuta cuando se pausa la reproducción del archivo de
      medios.
      <br />
      <b>onPlay:</b> Se ejecuta cuando comienza la reproducción del archivo de
      medios. <br />
      <b>onPlaying</b>: Se ejecuta cuando se reanuda la reproducción del archivo
      de medios después de una pausa.
      <br /> <b>onProgress:</b> Se ejecuta periódicamente durante la descarga
      del archivo de medios para informar el progreso.
      <br /> <b>onRateChange:</b> Se ejecuta cuando cambia la velocidad de
      reproducción del archivo de medios.
      <br /> <b>onSeeked:</b> Se ejecuta cuando el usuario ha saltado a una
      posición diferente en el archivo de medios.
      <br /> <b>onSeeking:</b> Se ejecuta cuando el usuario está buscando una
      posición específica en el archivo de medios.
      <br /> <b>onStalled:</b> Se ejecuta cuando la descarga del archivo de
      medios se interrumpe y no puede continuar.
      <br /> <b>onSuspend:</b> Se ejecuta cuando se interrumpe la descarga del
      archivo de medios y se suspende temporalmente.
      <br /> <b>onTimeUpdate:</b> Se ejecuta periódicamente durante la
      reproducción del archivo de medios para informar la posición actual.
      <br /> <b>onVolumeChange:</b> Se ejecuta cuando cambia el volumen del
      archivo de medios. <br />
      <b>onWaiting:</b> Se ejecuta cuando el archivo de medios se está
      descargando y se necesita más información para continuar la reproducción
      sin interrupciones.
    </div>
  );
}
