var page = document.body.id;
var home = document.getElementsByClassName('home')[0];
var menu = document.getElementsByClassName('menu-nav')[0];
var about = document.getElementsByClassName('about')[0];
var contact = document.getElementsByClassName('contact')[0];

//document.getElementById('form').reset();

if (page == 'home') {
  home.classList.add('active');
} else if (page == 'menu') {
  menu.classList.add('active');
} else if (page == 'about') {
  about.classList.add('active');
} else if (page == 'contact') {
  contact.classList.add('active');
}
