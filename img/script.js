$(document).ready(function() {
    // Función para desencadenar el desvanecimiento cuando se desplaza la página
    $(window).scroll(function() {
      $('.fade-in').each(function() {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          $(this).addClass('fade-in-active');
        }
      });
    });
  });