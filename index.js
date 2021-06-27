$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      console.log('scrolled');
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  });

  // toggle menue bar button
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });
});
