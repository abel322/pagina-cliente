"use strict";

var navbar = document.querySelector('.navbar');
var boton = document.querySelector('.navbar-toggler');
var menu = document.querySelector('.navbar-collapse');
window.addEventListener('scroll', function (e) {
  navbar.classList.toggle('sticky', document.documentElement.scrollTop > 40);
});
boton.addEventListener('click', function () {
  navbar.classList.toggle('bg-white');
  menu.classList.toggle('mostrar');
});