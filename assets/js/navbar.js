$(document).ready(function() {
  
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > $('#banner').height()) {
      $('.navbar').addClass('navbar-fixer');
    }
    if ($(window).scrollTop() < $('#banner').height()) {
      $('.navbar').removeClass('navbar-fixer');
    }
  });
});