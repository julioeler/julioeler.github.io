

function todo() {

  const INPUT = document.querySelector("#text");
  const BOTAO = document.querySelector(".adicionar");
  const LISTA = document.querySelector(".lista");

  function adicionar() {
    if (!INPUT.value) {
      alert("Ops, você esqueceu de digitar");
    } else {
      const check = document.createElement("input");
      check.type = "checkbox";
      const item = document.createElement("li");
      let texto = INPUT.value;
      item.innerText = texto;
      item.appendChild(check);
      LISTA.appendChild(item);
      INPUT.value = "";

      check.className = "remover-checkbox";

      check.addEventListener("click", function () {
        remover(check);
      });
    }
  }

  function remover(check) {
    if (check.checked) {
      check.parentElement.remove();
    }
  }
  BOTAO.addEventListener("click", adicionar);
};

todo();