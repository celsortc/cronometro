const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const reiniciar = document.querySelector(".reiniciar");
const milisegundos = document.querySelector(".milisecs");
const segundos = document.querySelector(".segundos");
const minutos = document.querySelector(".minutos");

var interval;
var cronPausado = false;

iniciar.onclick = () => {
  if (cronPausado === true) {
    var mili = +formataNumero(milisegundos.innerHTML);
    var sec = +formataNumero(segundos.innerHTML);
  } else {
    var mili = +milisegundos.innerHTML;
    var sec = +segundos.innerHTML;
  }

  // segundos.innerHTML = 55;
  btnToggle();
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
        var min = +minutos.innerHTML;
        min++;
        minutos.innerHTML = formataNumero(min, "min");
      }
    }
  }, 1);
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

function btnToggle() {
  if (iniciar.disabled === true) {
    iniciar.disabled = false;
    pausar.disabled = true;
  } else {
    iniciar.disabled = true;
    pausar.disabled = false;
  }
}

pausar.onclick = () => {
  clearInterval(interval);
  btnToggle();
  cronPausado = true;
};
