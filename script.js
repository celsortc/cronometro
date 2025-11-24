const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const reiniciar = document.querySelector(".reiniciar");
const milisegundos = document.querySelector(".milisecs");
const segundos = document.querySelector(".segundos");
const minutos = document.querySelector(".minutos");

var interval;

iniciar.onclick = () => {
  var mili = +milisegundos.innerHTML;
  segundos.innerHTML = 55;
  interval = setInterval(() => {
    if (mili < 990) {
      mili += 10;
      milisegundos.innerHTML = formataNumero(mili);
    } else if (mili === 990) {
      mili = 0;
      var sec = +segundos.innerHTML;
      sec++;
      segundos.innerHTML = formataNumero(sec);
      console.log(typeof sec);
    } else if (mili === 990 && sec === 59) {
      segundos.innerHTML = "00";

      var min = +minutos.innerHTML;
      min++;
      minutos.innerHTML = formataNumero(min);
    }
  }, 1);
};

function formataNumero(numero) {
  if (numero < 100) {
    return numero.toString().padStart(2, "0");
  } else {
    return numero.toString().slice(0, 2);
  }
}
