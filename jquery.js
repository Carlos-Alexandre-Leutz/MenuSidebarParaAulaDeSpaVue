 $(window).on("scroll", function() {
     if ($(window).scrollTop() > 100) {
         $(".sidebar-wrapper").addClass("sidebar-color");
     } else {
         $(".sidebar-wrapper").removeClass("sidebar-color");
     }
 });
 $('#icone').click(function() {
     if ($('.hamburguer').hasClass('hamburguer-mover')) {
         $('.hamburguer').removeClass('hamburguer-mover')
         $('.barra').removeClass('barra-aberta')
     } else {
         $('.hamburguer').addClass('hamburguer-mover')
         $('.barra').addClass('barra-aberta')
     }
 })