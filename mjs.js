let stars =document.getElementById("stars");
let moon =document.getElementById("moon");
let mountains_behind =document.getElementById("mountains_behind");
let mountains_front =document.getElementById("mountains_front");
let text =document.getElementById("text");
let sect =document.getElementById("se");
let head =document.querySelector("header");
var aa1 =document.querySelectorAll('a');


window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    stars.style.left=value * 0.15 + 'px';
    moon.style.left=value * 1.35 + 'px';
    moon.style.top=value * 1 + 'px';
    mountains_behind.style.left=value * 0.5 +'px';
    mountains_front.style.top=value * 0 +'px';
    text.style.marginBottom=value * 1 +'px';
    head.style.top=value * 0.5 +'px';
});

aa1.forEach(a => {
    a.addEventListener('click',()=>{
    aa1.forEach(a1 =>a1.classList.remove('active'));
    a.classList.add('active');
})
})