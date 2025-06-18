// Inicialização do Swiper
const swiper = new Swiper('.swiper', {
  // Efeito do carrossel (pode ser 'slide', 'fade', 'cube', 'coverflow', 'flip')
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  
  // Ativar loop infinito
  loop: true,

  // Paginação (bolinhas indicadoras)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Botões de navegação (setas)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
