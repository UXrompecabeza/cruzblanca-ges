$('.btn-patologia').click( function() {
  $('.btn-patologia').removeClass('activeGes');
  $(this).addClass('activeGes');
  $('.next').removeClass('disabled');
  $('html, body').animate({
    scrollTop: $('.next').offset().top
}, 700);
  $('.next').click(function() {
    window.location.href='ges-consulta.html';
  })
})

$('.accordionGes .containerRadius input').click(function() {
  $('.buy').removeClass('disabled');
  $('.buy').click(function() {
    window.location.href='ges-comprar.html';
  })
})

$('.metodoPago .containerRadius input').click(function() {
  $('.pay').removeClass('disabled');
  $('.pay').click(function() {
    window.location.href='ges-resumen.html';
  })
})

$('.generate').click(function() {
  window.location.href='ges-resumencopago.html';
})

$(function () {
  if ($('.flujo-ges').is('.carousel')) {
      // Carrusel usuario
      $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          dots: false,
          items: 1
      })
  }
});