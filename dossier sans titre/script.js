const navbar = document.getElementById('navbar');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const liens = document.querySelector('.items-links')
const liens2 = document.querySelector('.items-links2')
const liens3 = document.querySelector('.items-links3')
const liens4 = document.querySelector('.items-links4')



burger.addEventListener('click' , function tooglemenu(){
    menu.classList.toggle('active');
});

liens.addEventListener('click' , ()=>{
    menu.classList.remove('active');
})
liens2.addEventListener('click' , ()=>{
    menu.classList.remove('active');
})
liens3.addEventListener('click' , ()=>{
    menu.classList.remove('active');
})
liens4.addEventListener('click' , ()=>{
    menu.classList.remove('active');
})


window.addEventListener('scroll' , ()=>{
    if (window.scrollY > 10){
        navbar.classList.toggle('sticky')
    }
})
