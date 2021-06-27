const openNav = $('.nav__open');
const nav = $('.nav');
const closeNav = $('.nav__close');

openNav.on('click', ()=> {
  $('.nav').addClass('is-active');
})

closeNav.on('click', ()=> {
  $('.nav').removeClass('is-active');
})

$('#js-carousel-1').each(function () {
  // Создаем карусель
  var owl = $(this).find('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 2
      },
      900: {
        items: 3
      },
      1200: {
        items: 4
      },
      1400: {
        items: 5
      },
    },
  });

  // При клике по кнопке Влево
  $(this).find('.js-prev').on('click', function () {
    // Перематываем карусель назад
    owl.trigger('prev.owl.carousel');
  });

  // При клике по кнопке Вправо
  $(this).find('.js-next').on('click', function () {
    // Перематываем карусель вперед
    owl.trigger('next.owl.carousel');
  });
});

$('.list__item__button').on('click', function() {
  var id = $(this).attr('poster_id');
  $('.poster').addClass('hidden');
  $('#' + id).removeClass('hidden');
});
