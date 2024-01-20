export default function initClickProject() {}

const projetos = document.querySelectorAll('.projetoDiv');
projetos.forEach(projeto => {
    projeto.addEventListener('click', handleClick);
});

function handleClick() {
  this.classList.add('ativo');
  outsideClick(this, () =>{
    this.classList.remove('ativo')
  });
}

function outsideClick(element, callback) {
  const outside = 'data-ouside'
  const html = document.documentElement;

  if(!element.hasAttribute(outside)){
    html.addEventListener('click', handleOutsideClick);
    element.setAttribute(outside, '');
}
  function handleOutsideClick(event) {
    if(!element.contains(event.target)){
      element.removeAttribute(outside);
      html.removeEventListener('click', handleOutsideClick)
      callback();
    }
  }
}

