const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const navList = document.querySelector('.nav-list')
const rightNav = document.querySelector('.rightNav')


 burger.addEventListener('click', ()=>{
     rightNav.classList.toggle('v-class-resp');
     navlist.classList.toggle('v-class-resp');
     navbar.classList.toggle('v-class-resp');

 })