export default function initClickProject() {}

const projetos = document.querySelectorAll('.projetoDiv');
projetos.forEach(projeto => {
    projeto.addEventListener('click', handleClick);
});

function handleClick(event) {
  event.preventDefault();
  this.classList.add('ativo');
  outsideClick(this, () =>{
    this.classList.remove('ativo')
  });
}

function outsideClick(element, callback) {
  const html = document.documentElement;
  html.addEventListener('click', handleOutsideClick);
  function handleOutsideClick(event) {
    if(!element.contains(event.target)){
      callback();
    }
  }
}

