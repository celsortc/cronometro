const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const reiniciar = document.querySelector(".reiniciar");
const milisegundos = document.querySelector(".milisecs");
const segundos = document.querySelector(".segundos");
const minutos = document.querySelector(".minutos");

var interval;
var cronPausado = false;

iniciar.onclick = () => {
  iniciar.disabled = true;
  reiniciar.disabled = false;
  pausar.disabled = false;
  var mili;
  var sec;
  var min;

  if (cronPausado === true) {
    mili = +formataNumero(milisegundos.innerHTML);
    sec = +formataNumero(segundos.innerHTML);
    min = +formataNumero(minutos.innerHTML);
  } else {
    mili = +milisegundos.innerHTML;
    sec = +segundos.innerHTML;
    min = +minutos.innerHTML;
  }

  interval = setInterval(() => {
    cronPausado = false;
    if (mili < 990) {
      mili += 10;
      milisegundos.innerHTML = formataNumero(mili, "mili");
    } else if (mili === 990) {
      mili = 0;
      milisegundos.innerHTML = formataNumero(mili, "mili");
      var sec = +segundos.innerHTML;
      sec++;
      segundos.innerHTML = formataNumero(sec, "sec");
      if (sec > 59) {
        sec = 0;
        segundos.innerHTML = formataNumero(sec, "sec");
        min++;
        minutos.innerHTML = formataNumero(min, "min");
      }
    }
  }, 10);
};

function formataNumero(numero, tipo) {
  if (cronPausado === true) {
    return numero.toString().padEnd(3, "0");
  }
  if (tipo === "mili") {
    return numero.toString().padStart(3, "0").slice(0, 2);
  }
  console.log("chega?");

  return numero.toString().padStart(2, "0");
}

pausar.onclick = () => {
  pausar.disabled = true;
  iniciar.disabled = false;
  cronPausado = true;
  clearInterval(interval);
};

reiniciar.onclick = () => {
  reiniciar.disabled = true;
  pausar.disabled = true;
  iniciar.disabled = false;
  cronPausado = false;

  clearInterval(interval);

  milisegundos.innerHTML = "00";
  segundos.innerHTML = "00";
  minutos.innerHTML = "00";

  mili = 0;
  sec = 0;
};
