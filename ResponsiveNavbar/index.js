const humburger =document.querySelector('.hamburger');
const navlink=document.querySelector('.nav_link');

humburger.addEventListener('click',function(){
    navlink.classList.toggle('hide');
})