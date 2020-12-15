////cursor
let mouseCursor = document.querySelector(".cursor");
let logo = document.querySelector(".logo");
let logoSpan = document.querySelector(".logo span");
window.addEventListener('mousemove',cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
};

logo.addEventListener('mouseleave',()=>{
    mouseCursor.style.zIndex = "10";
    mouseCursor.classList.remove("link-grow");
    logo.classList.remove("hoverd-link");
    logoSpan.classList.add("logo_span_link");
});
logo.addEventListener('mouseover',()=>{
mouseCursor.style.zIndex = "-1";
mouseCursor.classList.add("link-grow");
logo.classList.add("hoverd-link");
logoSpan.classList.remove("logo_span_link");
});



///// change bike black

const bikeBlack1 = document.querySelector("#bike_black1");
const bikeBlack2 = document.querySelector("#bike_black2");
const bikeBlack3 = document.querySelector("#bike_black3");
const bikeBlack4 = document.querySelector("#bike_black4");
const bikeBlack5 = document.querySelector("#bike_black5");
const bikeBlack6 = document.querySelector("#bike_black6");

const bikeBlackColors = [
    "#566270",
    "#353866",
    "#71226e",
    "#0080ff",
    "#7C7877"
];

var changeBikeBlackColorIndex = 0;

function changeBikeBlackColor(){

    bikeBlack1.style.fill = bikeBlackColors[changeBikeBlackColorIndex];
    bikeBlack2.style.fill = bikeBlackColors[changeBikeBlackColorIndex];
    bikeBlack3.style.fill = bikeBlackColors[changeBikeBlackColorIndex];
    bikeBlack4.style.fill = bikeBlackColors[changeBikeBlackColorIndex];
    bikeBlack5.style.fill = bikeBlackColors[changeBikeBlackColorIndex];
    bikeBlack6.style.fill = bikeBlackColors[changeBikeBlackColorIndex];





    changeBikeBlackColorIndex += 1;
    if(changeBikeBlackColorIndex > 5){
        changeBikeBlackColorIndex = 0;
    }
}

bikeBlack1.addEventListener('click', changeBikeBlackColor );
bikeBlack2.addEventListener('click', changeBikeBlackColor );
bikeBlack3.addEventListener('click', changeBikeBlackColor );
bikeBlack4.addEventListener('click', changeBikeBlackColor );
bikeBlack5.addEventListener('click', changeBikeBlackColor );
bikeBlack6.addEventListener('click', changeBikeBlackColor );




// change hat color
const hatColors = document.querySelectorAll("#hat path");
const hat = document.querySelector("#hat");
const colors = [
    "#c6e5d9",
    "#d68189",
    "#c6a49a",
    "#e94e77",
    "#c8c8a9",
    "#79a8a9"
];
var changeHatColorIndex = 0;

function changeHatColor(){
    for(i = 0; i < hatColors.length ; i++){
        hatColors[i].style.fill = colors[changeHatColorIndex];
    }
    changeHatColorIndex += 1;
    if(changeHatColorIndex > 5){
        changeHatColorIndex = 0;
    }
}

hat.addEventListener('click', changeHatColor );


//change top color///////////////////////////////////////////
const top1 = document.querySelector('.top1');
const top2 = document.querySelector('.top2');
const topColors = document.querySelectorAll("#top");

var changeTopColorIndex = 0;

function changeTopColor(){
    for(i = 0; i < topColors.length ; i++){
        topColors[i].style.fill = colors[changeTopColorIndex];
    }
    changeTopColorIndex += 1;
    if(changeTopColorIndex > 5){
        changeTopColorIndex = 0;
    }
}


top1.addEventListener('click', changeTopColor );
top2.addEventListener('click', changeTopColor);

//change bottom color/////////////////////////////////////////////////////
const bottom1 = document.querySelector(".bottom1");
const bottom2 = document.querySelector(".bottom2");
const bottomColors = document.querySelectorAll("#bottom");

var changeBottomColorIndex = 0;

function changeBottomColor(){
    for(i = 0; i < bottomColors.length ; i++){
        bottomColors[i].style.fill = colors[changeBottomColorIndex];
    }
    changeBottomColorIndex += 1;
    if(changeBottomColorIndex > 5){
        changeBottomColorIndex = 0;
    }
}


bottom1.addEventListener('click', changeBottomColor );
bottom2.addEventListener('click', changeBottomColor);













//change bike color//////////////////////////////////////////
const bike1 = document.querySelector('.bike1');
const bike2 = document.querySelector('.bike2');
const bike3 = document.querySelector('.bike3');
const bike4 = document.querySelector('.bike4');
const bike5 = document.querySelector('.bike5');
const bike6 = document.querySelector('.bike6');

const bikeColors = document.querySelectorAll("#bike");
var changeBikeColorIndex = 0;

function changeBikeColor(){
    for(i = 0; i < bikeColors.length ; i++){
        bikeColors[i].style.fill = colors[changeBikeColorIndex];
    }
    changeBikeColorIndex += 1;
    if(changeBikeColorIndex > 5){
        changeBikeColorIndex = 0;
    }
}


bike1.addEventListener('click', changeBikeColor );
bike2.addEventListener('click', changeBikeColor );
bike3.addEventListener('click', changeBikeColor );
bike4.addEventListener('click', changeBikeColor );
bike5.addEventListener('click', changeBikeColor );
bike6.addEventListener('click', changeBikeColor );




//change shoes color////////////////////////////////////////////////////
const shoes1 = document.querySelector('.shoes1');
const shoes2 = document.querySelector('.shoes2');

const shoesColors = document.querySelectorAll("#shoes");
// const colors = [
//     "#c6e5d9",
//     "#d68189",
//     "#c6a49a",
//     "#e94e77",
//     "#c8c8a9",
//     "#79a8a9"
// ];
var changeShoesColorIndex = 0;

function changeShoesColor(){
    for(i = 0; i < shoesColors.length ; i++){
        shoesColors[i].style.fill = colors[changeShoesColorIndex];
    }
    changeShoesColorIndex += 1;
    if(changeShoesColorIndex > 5){
        changeShoesColorIndex = 0;
    }
}


shoes1.addEventListener('click', changeShoesColor );
shoes2.addEventListener('click', changeShoesColor );

//////morphing
const moonPath = "M47.5 84C47.5 130.392 84 168 84 168C37.6081 168 0 130.392 0 84C0 37.6081 37.6081 0 84 0C84 0 47.5 37.6081 47.5 84Z";

const sunPath =  "M168 84C168 130.392 130.392 168 84 168C37.6081 168 0 130.392 0 84C0 37.6081 37.6081 0 84 0C130.392 0 168 37.6081 168 84Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false;

///We NEED TO CLICK ON THE SUN

darkMode.addEventListener('click',()=>{
    //we need to use anime.js
    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
    });
    //ADD DIFFEREMT ANIMATION TO THE TIMELINE
    timeline.add({
        targets: ".sun",
        d: [{value : toggle ? sunPath : moonPath}]
    })
    .add({
        targets: '#darkMode',
        rotate: 320
    }, '-=350')
    .add({
        targets: "body",
        backgroundColor: toggle ? '#fff' : '#1e2022',
        color : toggle ? "#1e2022" : "#fff"
    }, '-=700');
    // EVERYTIME we click on the sun I wa
    if(!toggle){
        toggle= true;        
    }else{
        toggle = false;
    }
});
