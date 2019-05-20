$('.input-date input.datepicker').on('change', function() {
  $('.pickCenter').removeClass('disabled');
  $('.pickCenter').click(function() {
    window.location.href='ges-consulta.html';
  })
})

$('.btn-center input').click( function() {

  $('.containerCenter').removeClass('selectedCenter');
  $(this).parent().addClass('selectedCenter');
  $('html, body').animate({
    scrollTop: $('.btnGes').offset().top
  }, 700);
})

$('.btn-patologia').click( function() {
  $('.btn-patologia').removeClass('activeGes');
  $(this).addClass('activeGes');
  $('.btnGes').removeClass('disabled');
  $('html, body').animate({
    scrollTop: $('.btnGes').offset().top
  }, 700);

  $('.next').click(function() {
    window.location.href='ges-centro.html';
  })
})

$('.accordionGes .containerRadius input').click(function() {
  $('.buy').removeClass('disabled');
  $('html, body').animate({
    scrollTop: $('.btnGes').offset().top
  }, 700);
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

$('.item').click(function() {
  $('.container-btnes').toggleClass('hide');
  $('.alertaBtnes').toggleClass('hide');
})

$(".datepicker").datepicker({
  dateFormat: "dd/mm/yy",
  monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
  firstDay: 1,
  dayNamesMin: [ "Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab" ],
  minDate: new Date(2019, 05, 20)
});