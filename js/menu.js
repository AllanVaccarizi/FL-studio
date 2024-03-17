var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('mainNav');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});