$(document).ready(function () {

  $('.quiz-form select').select2({
    minimumResultsForSearch: -1
  });

  $(".wifi-slider").lightSlider({
    item: 4,
    slideMargin: 0,
    prevHtml: '<i class="icon-chevron-left"></i>',
    nextHtml: '<i class="icon-chevron-right"></i>',
    pager: false,
    loop: true,
    auto: true,
    pause: 7000,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1250,
      settings: {
        item: 3
      }
    }, {
      breakpoint: 950,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 660,
      settings: {
        item: 1
      }
    }]
  });

  $("#phone").mask("+7 (999) 999-99-99");

  $('.quiz-form .next').click(function () {
    $(this).closest('.step').hide();
    var nextStep = $(this).closest('.step').next('.step')[0];
    $(nextStep).fadeIn();
  });

  $('.quiz-form .back').click(function () {
    $(this).closest('.step').hide();
    var backStep = $(this).closest('.step').prev('.step')[0];
    $(backStep).fadeIn();
  });

  var forEach = function forEach(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) {
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    } else for (var e = 0, l = t.length; l > e; e++) {
      o.call(r, t[e], e, t);
    }
  };

  var hamburgers = document.querySelectorAll(".hamburger");

  if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener("click", function () {
        this.classList.toggle("is-active");
      }, false);
    });
  }

  $('.btn-menu').click(function () {
    $('.mobile-menu').toggleClass('active');
  });

  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 0;
    $('html,body').stop().animate({
      scrollTop: $(this.hash).offset().top - fixed_offset
    }, 500);
    e.preventDefault();

    if (window.innerWidth <= 1250) {
      $('.mobile-menu').removeClass('active');
      $('.btn-menu button').removeClass('is-active');
    }
  });
  
});