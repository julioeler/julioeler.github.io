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

const mensagens = [
    "Seus esforços são notáveis. Parabéns!!",
    "Incrível! Continue assim!",
    "Você está fazendo um ótimo trabalho!",
    "Sua dedicação é inspiradora!",
    "Continue, o sucesso está próximo!",
	 "Cada pequeno progresso é um passo em direção ao seu objetivo. Muito bem!",
    "Excelente! Sua persistência vai te levar longe!",
    "Fantástico! Você está superando suas próprias expectativas!",
    "Maravilhoso! Cada esforço seu está construindo o caminho para o sucesso!",
    "Incrível! Sua capacidade de superação é admirável!",
    "Sua jornada é inspiradora. Continue firme!",
    "Você está no caminho certo. Mantenha o foco e a determinação!",
    "Seu progresso é um reflexo de sua dedicação. Parabéns!",
    "Continue assim e nada poderá te deter!",
    "Cada questão resolvida é um degrau a mais em direção ao seu sonho. Excelente trabalho!",
    "A cada dia, você está mais perto de alcançar seus objetivos. Continue!",
    "Sua força de vontade é o motor para o seu sucesso. Impressionante!",
    "Lembre-se: cada desafio superado é uma vitória. Você está indo muito bem!",
    "A perseverança é a chave para o sucesso. Você está demonstrando isso a cada dia!",
    "Nunca duvide do seu potencial. Você é capaz de grandes conquistas!",
	   "Pequenos passos, grandes vitórias.",
    "Sua luz inspira!",
    "Sonhe. Acredite. Conquiste.",
    "Persista! O sucesso aguarda.",
    "Crescer é o caminho.",
    "Você é pura magia!",
    "Transforme desafios em oportunidades.",
    "Acredite, você pode voar!",
    "Respire fundo, e avance.",
    "Seja a mudança que deseja.",
    "Cada dia, uma nova chance.",
    "Você é mais forte do que pensa.",
    "A beleza está na jornada."

];


  const fecharPopup = document.getElementById('popup');

  fecharPopup.addEventListener('click', () =>{
      fecharPopup.style.display = 'none';
  });

function showPopup() {
    // Seleciona uma mensagem aleatória
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    // Define a mensagem selecionada no parágrafo do popup
    document.querySelector('.popup-content p').textContent = mensagemAleatoria;
    // Mostra o popup
    document.getElementById('popup').style.display = 'block';
}




});


