// Script para controlar a transição das imagens no slide
document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.querySelectorAll(".slide-item");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
  }
});

// Código JavaScript para exibir o ano no copyright
var year = new Date().getFullYear();
document.getElementById("copyright").innerHTML =
  " Todos os direitos resevados Desenvolvido por Camilla Larissa  © " + year;
