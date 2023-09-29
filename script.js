function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.jsScroll');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.8;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add('ativo');
        }
      })
    }

    window.addEventListener('scroll', animaScroll);
    animaScroll();
  }
}
initAnimacaoScroll();