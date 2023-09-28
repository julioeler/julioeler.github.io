document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("textInput");
  const textList = document.getElementById("textList");
  const sendButton = document.getElementById("sendButton");

  sendButton.addEventListener("click", function () {
    const inputValue = textInput.value.trim();

    if (inputValue !== "") {
      const listItem = document.createElement("li");
      listItem.className = "itemLista";
      listItem.textContent = inputValue;

      const deleteButton = document.createElement("button");
      deleteButton.className = "sugestaoDeletar";
      deleteButton.textContent = "excluir";

      deleteButton.addEventListener("click", function () {
        textList.removeChild(listItem);
      });

      listItem.appendChild(deleteButton);
      textList.appendChild(listItem);

      textInput.value = ""; // Limpa o campo de entrada
    }
  });
});
