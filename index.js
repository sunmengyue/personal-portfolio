$(document).ready(function () {
  $(window).scroll(function () {
    this.scrollY > 20
      ? $('.navbar').addClass('sticky')
      : $('.navbar').removeClass('sticky');

    this.scrollY > 500
      ? $('.scroll-up-btn').addClass('show')
      : $('.scroll-up-btn').removeClass('show');
  });

  // slide up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  // navbar link click slide
  $('.navbar a').click(function (e) {
    e.preventDefault();
    const hash = this.hash;
    $('html, body').animate({ scrollTop: $(hash).offset().top }, 800);
  });

  // toggle menue bar button
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });
});

// typing anition script
const typed = new Typed('.typing', {
  strings: ['Developer', 'Resercher', 'Freelancer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
const typed2 = new Typed('.typing-2', {
  strings: ['Developer', 'Resercher', 'Freelancer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
