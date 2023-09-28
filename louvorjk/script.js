// FUNÇÃO MOBILE NAV
document.addEventListener("DOMContentLoaded", function () {
  // Inicialmente, exiba a seção "Escala" e adicione a classe "active" ao link correspondente
  document.querySelector("#escala").classList.add("active");
  document.querySelector("a[href='#escala']").classList.add("active");

  // Adicione um evento de clique a todos os links da navegação
  var links = document.querySelectorAll("nav ul li a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      event.preventDefault();

      // Remova a classe "active" de todas as seções e links
      var sections = document.querySelectorAll("section");
      for (var j = 0; j < sections.length; j++) {
        sections[j].classList.remove("active");
      }
      for (var k = 0; k < links.length; k++) {
        links[k].classList.remove("active");
      }

      // Adicione a classe "active" à seção correspondente e ao link clicado
      var target = this.getAttribute("href").substring(1);
      document.querySelector("#" + target).classList.add("active");
      this.classList.add("active");
    });
  }
});

// Verifica se o dispositivo é móvel antes de aplicar o código JavaScript
if (/Mobi|Android/i.test(navigator.userAgent)) {
  document.addEventListener("DOMContentLoaded", function () {
    // Código JavaScript para alternar as seções
    // ...
  });
}

// Seletor para todos os links com a classe "scroll-link"
const scrollLinks = document.querySelectorAll('.scroll-link');

// Adicionar evento de clique a cada link
scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Impedir o comportamento padrão do link

    const targetId = link.getAttribute('href'); // Obter o ID do alvo do link
    const targetElement = document.querySelector(targetId); // Selecionar o elemento alvo usando o ID

    if (targetElement) {
      // Rolagem suave até o elemento alvo
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ALTERA A COR DO BOTÕES NO MOBILE

document.addEventListener("DOMContentLoaded", function () {
  // Adicione a classe 'active' ao primeiro link e à primeira seção
  var firstLink = document.querySelector(".header-menu a");
  var firstSection = document.querySelector(".section");
  firstLink.classList.add("active");
  firstSection.classList.add("active");

  // Manipule o clique nos links
  var links = document.querySelectorAll(".header-menu a");
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remova a classe 'active' de todos os links e seções
      links.forEach(function (link) {
        link.classList.remove("active");
      });
      var sections = document.querySelectorAll(".section");
      sections.forEach(function (section) {
        section.classList.remove("active");
      });

      // Adicione a classe 'active' apenas ao link clicado
      this.classList.add("active");

      // Obtenha o ID da seção correspondente ao link clicado
      var sectionId = this.getAttribute("href");

      // Adicione a classe 'active' à seção correspondente
      document.querySelector(sectionId).classList.add("active");

      // Role a página até a seção correspondente
      var offset = document.querySelector(sectionId).offsetTop;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    });
  });
});

















// FUNÇÃO PARA APARECER O POPUP SEMPRE


// function showPopup() {
//   var overlay = document.getElementById("overlay");
//   var popup = document.getElementById("popup");
//   overlay.classList.add("show-popup");
//   popup.classList.add("show-popup");
// }

// function closePopup() {
//   var overlay = document.getElementById("overlay");
//   var popup = document.getElementById("popup");
//   overlay.classList.remove("show-popup");
//   popup.classList.remove("show-popup");
// }

// showPopup();

// // Fecha o pop-up quando o botão 'Fechar' é clicado
// var closeBtn = document.getElementById("close-btn");
// closeBtn.addEventListener("click", closePopup);