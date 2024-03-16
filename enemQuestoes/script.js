document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  const addButton = document.getElementById('addButton'); // Botão para adicionar número
  const numberInput = document.getElementById('numberInput'); // Campo de entrada para o número
  const totalDisplay = document.getElementById('totalDisplay'); // Elemento para exibir o total (adicione este elemento no seu HTML)
  let animationFrameId;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Inicializa o total com o valor do localStorage ou 0 se não existir
  let total = parseInt(localStorage.getItem('total')) || 0;
  totalDisplay.textContent = `Total: ${total}`; // Atualiza o display com o total atual

  const confettis = [];

  function createConfetti() {
      for (let i = 0; i < 100; i++) {
          confettis.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height - canvas.height,
              color: `hsla(${Math.random() * 360}, 100%, 50%, 1)`,
              size: Math.random() * 5 + 5,
              speed: Math.random() * 2 + 1,
              sway: Math.random() * 2 - 1,
          });
      }
  }

  function drawConfetti() {
      confettis.forEach(confetti => {
          ctx.fillStyle = confetti.color;
          ctx.fillRect(confetti.x, confetti.y, confetti.size, confetti.size);
          updateConfetti(confetti);
      });
  }

  function updateConfetti(confetti) {
      confetti.x += confetti.sway;
      confetti.y += confetti.speed;
      if (confetti.y > canvas.height) {
          confetti.y = 0;
          confetti.x = Math.random() * canvas.width;
      }
  }

  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawConfetti();
      animationFrameId = requestAnimationFrame(animate);
  }

  function startAnimation() {
      createConfetti();
      animate();
      setTimeout(() => {
          cancelAnimationFrame(animationFrameId);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 5000); // Para a animação após 5 segundos
  }

  addButton.addEventListener('click', () => {
      const number = parseInt(numberInput.value, 10);
      if (!isNaN(number)) {
          total += number; // Soma o número inserido ao total
          localStorage.setItem('total', total); // Atualiza o valor no localStorage
          totalDisplay.textContent = `Total: ${total}`; // Atualiza o display com o novo total
          startAnimation(); // Inicia a animação de confetes
          showPopup();
      }
      numberInput.value = ''; // Limpa o campo de entrada
  });

  const fecharPopup = document.getElementById('popup');

  fecharPopup.addEventListener('click', () =>{
      fecharPopup.style.display = 'none';
  });

  function showPopup() {
    document.getElementById('popup').style.display = 'block';
}



});


