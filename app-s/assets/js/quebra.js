const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const pesoInicial = Number(e.target.querySelector("#pesoInicial").value);
  const pesoFinal = Number(e.target.querySelector("#pesoFinal").value);

  if (!pesoInicial) {
    atualizarResultado("Peso Inicial Inválido", false, "#resu");
    return;
  }
  if (!pesoFinal) {
    atualizarResultado("Peso Final Inválido", false, "#resu");
    return;
  }

  const quebraPercentual = calcularQuebra(pesoInicial, pesoFinal);
  const resultadoMensagem = `
    Peso Inicial: ${pesoInicial} <br/>
    Peso Final: ${pesoFinal} <br/>
    Quebra: ${quebraPercentual.toFixed(2)}%
  `;
  atualizarResultado(resultadoMensagem, true, "#resu");
});

function atualizarResultado(msg, isValid, seletor) {
  const container = document.querySelector(seletor);
  container.innerHTML = '';

  const p = document.createElement('p');
  p.innerHTML = msg;

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('paragrafo-erro');
  }

  container.appendChild(p);
}