let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let calc = document.getElementById('calc');
let table = document.getElementById('table');

let result = 0;

calc.addEventListener('click',function(){
  result = Number(peso.value) / (Number(altura.value) * Number(altura.value));
  
  if (result<=16.9) {
    table.innerHTML = `<div class="ruim"><h2>Muito Abaixo do Peso</h2> <p>Seu IMC é ${result.toFixed("2")}</p></div>`
  }else if(result>=17 && result<=18.4){
    table.innerHTML = `<div class="alerta"><h2>Abaixo do Peso</h2> <p>Seu IMC é ${result.toFixed("2")}</p></div>`
  }else if (result>=18.5 && result<=24.9) {
    table.innerHTML = `<div class="bom"><h2>Peso Normal</h2>  <p>Seu IMC é ${result.toFixed("2")}</p></div>`
  }else if (result>=25 && result<=29.9) {
    table.innerHTML = `<div class="alerta"><h2>Acima do Peso</h2> <p>Seu IMC é ${result.toFixed("2")}</p></div>`
  }else if (result>=30 && result<=34.9) {
    table.innerHTML = `<div class="ruim"><h2>Obesidade Grau I</h2> <p>Seu IMC é ${result.toFixed("2")}</p></div>`
  }else if (result>=35 && result<=40) {
    table.innerHTML = `<div class="ruim"><h2>Obesidade Grau II</h2> <p>Seu IMC é ${result.toFixed("2")}</p></div>`
  }else if (result>40) {
    table.innerHTML = `<div><h2>Obesidade Grau III</h2> <p>Seu IMC é ${result.toFixed("2")}</p></div>`
  }
})