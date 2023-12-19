const BOTOES = document.querySelectorAll("td");
const TEXTO = document.createElement("p");
const DISPLAY = document.querySelector(".display");

function selecionar(botao) {
  // console.log(botao.target.innerHTML);
  if (!isNaN(botao.target.innerText)) {
    TEXTO.innerText += botao.target.innerHTML;
    DISPLAY.appendChild(TEXTO);
  } else {
    
  }
}

BOTOES.forEach((botao) => {
  botao.addEventListener('click', selecionar);
});