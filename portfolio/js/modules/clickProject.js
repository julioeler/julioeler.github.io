export default function initClickProject() {
  const projetos = document.querySelectorAll('.projetoDiv');
  projetos.forEach(projeto => {
    projeto.addEventListener('click', handleClick);
  });

  function handleClick() {
    this.classList.add('ativo');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo')
    });
  }

  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-ouside'

    if (!element.hasAttribute(outside)) {
      events.forEach(userEvent => {
        html.addEventListener(userEvent, handleOutsideClick);
      })
      element.setAttribute(outside, '');
    }

    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        events.forEach(userEvent => {
          html.removeEventListener(userEvent, handleOutsideClick)
        })
        callback();
      }
    }
  }
}