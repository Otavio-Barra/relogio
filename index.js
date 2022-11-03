const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};


const intervelo = setInterval(() => {
  let data = new Date();
  let horas = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  document.querySelector("#hora").innerHTML = zeroFill(horas) ;
  document.querySelector("#minuto").innerHTML = zeroFill(minutos) ;
  document.querySelector("#segundo").innerHTML = zeroFill(segundos);
}, 1000);


