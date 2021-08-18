const form = document.querySelector('#form');
form.addEventListener('submit', function (e){
    e.preventDefault();
    
    const pesoInicial = e.target.querySelector('#pesoInicial');
    const pesoFinal = e.target.querySelector('#pesoFinal');
    
    const pesoI = Number(pesoInicial.value);
    const pesoF = Number(pesoFinal.value);

    if(!pesoI){
      setResultado2('Peso Inválido',false);
      return;
    }
    if(!pesoF){
      setResultado2('Peso Inválido',false);
      return;
    }
    
    const msg = quebra(pesoI, pesoF);
    const res = resultado(pesoI);
    
    const ress = resultado2(pesoF);
    
    const str = `Peso1: ${res} <br/>Peso2: ${ress}<br/> Quebra: ${msg.toFixed(2)}`;
   // setResultado(msg, true);
    setResultado2(str, true);
//    let cont = 0;
    
  //  const amazenar = [];
  //  amazenar.push(msg)
  //  setResultado(amazenar, true);
});


function quebra(peso1, peso2){
    
    //const peso1 = 418;
    //const peso2 = 370;

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

function criarP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
  const resultado = document.querySelector('#calculo');
  calculo.innerHTML += '';
  
  const p = criarP();
  
  if  (isValid){
      p.classList.add('paragrafo-resultado');
  }
        
  p.innerHTML = msg;
  calculo.appendChild(p);
}
function setResultado2(msgp, isValid){
  const resultado = document.querySelector('#resu');
  resu.innerHTML += '';
  
  const p = criarP();
  
  if  (isValid){
      p.classList.add('paragrafo-resultado');
  }
        
  p.innerHTML = msgp;
  resu.appendChild(p);
}