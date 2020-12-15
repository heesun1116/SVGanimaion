let mouseCursor = document.querySelector(".cursor");
let mainText = document.querySelector(".main_text h1");
let body = document.querySelector("body");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

window.addEventListener('mousemove',cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
};

mainText.addEventListener('mouseleave',()=>{
        mouseCursor.classList.remove("link-grow");
        mouseCursor.style.zIndex = "3";
        mainText.classList.remove("hoverd-link");
});
mainText.addEventListener('mouseover',()=>{
        mouseCursor.classList.add("link-grow");
        mouseCursor.style.zIndex = "-1";
        mainText.classList.add("hoverd-link");
});


first.addEventListener('mouseleave',()=>{
    body.style.cursor = "none";
});
first.addEventListener('mouseover',()=>{
    body.style.cursor = "pointer";
});
second.addEventListener('mouseleave',()=>{
    body.style.cursor = "none";
});
second.addEventListener('mouseover',()=>{
    body.style.cursor = "pointer";
});
third.addEventListener('mouseleave',()=>{
    body.style.cursor = "none";
});
third.addEventListener('mouseover',()=>{
    body.style.cursor = "pointer";
});

