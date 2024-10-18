// Creo función para calcular tiempo
function calcularTiempo() {
  //Obtengo la hora local del sistema y guardarla en una variable
  let tiempo = new Date();

  //Con estos tres metodos obtengo por separado la hora/minuto/segundo
  let hora = tiempo.getHours();
  let minuto = tiempo.getMinutes();
  let segundo = tiempo.getSeconds();

  // Ajustar hora, minutos , segundo; poner 0 izquierda si son inferiores a 10
  hora = hora < 10 ? "0" + hora : hora;
  minuto = minuto < 10 ? "0" + minuto : minuto;
  segundo = segundo < 10 ? "0" + segundo : segundo;

  // concateno hora, minutos , segundo
  let pantallaReloj = hora + ":" + minuto + ":" + segundo;
  let relojDigital = document.querySelector(".reloj");
  relojDigital.innerHTML = pantallaReloj;
}

// Llamo la función calcular tiempo, Se ejecuta cada segundo
setInterval(calcularTiempo, 1000);
