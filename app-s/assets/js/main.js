
const form = document.querySelector('#form');
form.addEventListener('submit', function(e){
     e.preventDefault();
     
     const pesoInicial = e.target.querySelector('#initial');
     const pesoFinal = e.target.querySelector('#finished');

    const pesoI = Number(pesoInicial.value);
    const pesoF = Number(pesoFinal.value);

    if(!pesoI){
      setResultad('Peso Inválido', false);
      return;
    }
   if(!pesoF){
     setResultad('Peso Inválido', false);
     return;
   }

    const msg = quebra(pesoI, pesoF);
    
    const res = resultado(pesoI);
    const ress = resultado2(pesoF);
    
    const str = `Peso1: ${res} <br/>Peso2: ${ress}<br/> Quebra: ${msg.toFixed(2)}`;
   // setResultado(msg, true);
    setResultad(str, true);
   // setResultad(msg, true);
    
});

const hora = document.getElementById('hour');
hora.addEventListener('input',function(){
  const hours = hora.value;
  const add = '06:30:00';
  const acrecimo = somartempos(hours, add);
  setResultado(acrecimo, true);
});

const selecao = document.querySelector('#selecao');
const selec = selecao.selectedIndex;
const selecValor = [].filter
.call(selecao.options, option => option.selected)
.map(option => option.text);

alert(selecValor);

function somartempos(tempo1, tempo2 = '06:30:00') {
    var array1 = tempo1.split(':');
    var tempo_seg1 = (parseInt(array1[0]) * 3600) + (parseInt(array1[1]) * 60) + parseInt(array1[2]);
    var array2 = tempo2.split(':');
    var tempo_seg2 = (parseInt(array2[0]) * 3600) + (parseInt(array2[1]) * 60) + parseInt(array2[2]);
    var tempofinal = parseInt(tempo_seg1) + parseInt(tempo_seg2);
    var hours = Math.floor(tempofinal / (60 * 60));
    var divisorMinutos = tempofinal % (60 * 60);
    var minutes = Math.floor(divisorMinutos / 60);
    var divisorSeconds = divisorMinutos % 60;
    var seconds = Math.ceil(divisorSeconds);
    var contador = "";
    if (hours < 10) { contador = "0" + hours + ":"; } else { contador = hours + ":"; }
    if (minutes < 10) { contador += "0" + minutes + ":"; } else { contador += minutes + ":"; }
    if (seconds < 10) { contador += "0" + seconds; } else { contador += seconds; }
    return contador;
    
}

function criarP(){
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid){
  const resultado = document.querySelector('#result');
  result.innerHTML = msg;
  
  // const p = criarP();
  
  // if  (isValid){
  //     p.classList.add('paragrafo-resultado');
  // }
        
  // p.innerHTML = msg;
  // result.appendChild(p);
}

function setResultad(msgp, isValid){
  const resultado = document.querySelector('#resu');
  resu.innerHTML += '';
  
  const p = criarP();
  
  if  (isValid){
      p.classList.add('paragrafo-resultado');
  }
        
  p.innerHTML = msgp;
  resu.appendChild(p);
}

function quebra(peso1, peso2){

    const pesoInicial = peso1  - 105;
    const pesoFinal = peso2 - 105;
    const resultado = ((pesoFinal / pesoInicial)*100)-100;
    
    return resultado;
} 

function resultado(res){
  const p01 = res;
  return p01;
}

function resultado2 (ress){
  const p02 = ress;
  return p02;
}