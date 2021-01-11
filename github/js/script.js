

 

$(document).ready(function(){
  //Меню-бургер
  $('.burger__btn').click(function(event) {
    $('.burger__btn').toggleClass('.burger__btn_active');
    $('.burger__menu').toggleClass('burger__menu_active');
});
  //Слайдер
  $('.slider-normal').slick({
    dots: true,
    slidesToShow: 3,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1876,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,            
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      
    ]  
  });
  //Мини-слайдер
  $('.slider-mini').slick({
    dots: true,
    slidesToShow: 3,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 722,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,            
        }
      },
      {
        breakpoint: 694,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]  
  });
  //Слайдер с информацие о ресторане
  $('.slider__text').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true, 
    responsive: [
      {
        breakpoint: 702,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,            
        }
      },
      
    ] 
  });
  //Слайдер с галерей
  $('.popup__btn').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeIn();
  })
  $('.popup__close').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeOut();
  })
  $('.slider__popup').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    variableWidth: true,
    centerMode: true,
  })
  //Слайдер-аккаунта
  $('.slider__account').slick({
    slidesToShow:3,
    adaptiveHeight: true,
    variableWidth: true,
    centerMode: true,
  })
})


