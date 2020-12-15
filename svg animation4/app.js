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

// change cat


const body = document.querySelector("#body_change");
const ear = document.querySelector("#ear_change");
const tail = document.querySelector("#tail_change");
const leg = document.querySelector("#leg_change");
const face = document.querySelector("#face_change");

const colorstreeCat = [
    "#6d819c",
    "#dedcee",
    "#77AAAD",
    "#FFBC42",
    "#F68657",
    "#A593E0"
];
var changeCatColorIndex = 0;

function changeCatColor(){

        body.style.fill = colorstreeCat[changeCatColorIndex];
        ear.style.fill = colorstreeCat[changeCatColorIndex];
        tail.style.fill = colorstreeCat[changeCatColorIndex];
        leg.style.fill = colorstreeCat[changeCatColorIndex];
        face.style.fill = colorstreeCat[changeCatColorIndex];


    changeCatColorIndex += 1;
    if(changeCatColorIndex > 5){
        changeCatColorIndex = 0;
    }
}

body.addEventListener('click', changeCatColor );
ear.addEventListener('click', changeCatColor );
tail.addEventListener('click', changeCatColor );
leg.addEventListener('click', changeCatColor );
face.addEventListener('click', changeCatColor );



//// change ball
const colorBall = [
    "#D73646",
    "#F999A5",
    "#5BBDCE",
    "#E5DDD4",
    "#1C536E",
    "#EE7785"
]
const ball = document.querySelectorAll("#ball");

const ball1 = document.querySelector(".ball1");
const ball2 = document.querySelector(".ball2");
const ball3 = document.querySelector(".ball3");
const ball4 = document.querySelector(".ball4");
const ball5 = document.querySelector(".ball5");
const ball6 = document.querySelector(".ball6");
const ball7 = document.querySelector(".ball7");
const ball8 = document.querySelector(".ball8");
const ball9 = document.querySelector(".ball8");




var changeBallColorIndex = 0;

function changeBallColor(){
    for(i = 0; i < ball.length ; i++){
        ball[i].style.fill = colorBall[changeBallColorIndex];
    }
    changeBallColorIndex += 1;
    if(changeBallColorIndex > 5){
        changeBallColorIndex = 0;
    }
}

ball1.addEventListener('click', changeBallColor );
ball2.addEventListener('click', changeBallColor );
ball3.addEventListener('click', changeBallColor );
ball4.addEventListener('click', changeBallColor );
ball5.addEventListener('click', changeBallColor );
ball6.addEventListener('click', changeBallColor );
ball7.addEventListener('click', changeBallColor );
ball8.addEventListener('click', changeBallColor );
ball9.addEventListener('click', changeBallColor );

///////change window

const window1 = document.querySelector("#window1");
const window2 = document.querySelector("#window2");
const colorWindow = [
    "#9baec8s",
    "#f8ecc9",
    "#f1bbba",
    "#a7a7a2",
    "#566270",
    "#FDD692"
];

var changeWindowColorIndex = 0;

function changeWindowColor(){
        window1.style.fill = colorWindow[changeWindowColorIndex]
        window2.style.fill = colorWindow[changeWindowColorIndex];

    changeWindowColorIndex += 1;
    if(changeWindowColorIndex > 5){
        changeWindowColorIndex = 0;
    }
}

window1.addEventListener('click', changeWindowColor) ;
window2.addEventListener('click', changeWindowColor)






// change snowmen
const scarf = document.querySelector("#scarf");
const hat = document.querySelector("#hat");
const colorstreeSnowmen = [
    "#3ac569",
    "#e85a71",
    "#fec8c9",
    "#444f59",
    "#1ec0ff",
    "#55967e",
];
var changeHatScarfColorIndex = 0;

function changeHatScarfColor(){
        scarf.style.fill = colorstreeSnowmen[changeHatScarfColorIndex]
        hat.style.fill = colorstreeSnowmen[changeHatScarfColorIndex];

    changeHatScarfColorIndex += 1;
    if(changeHatScarfColorIndex > 5){
        changeHatScarfColorIndex = 0;
    }
}

hat.addEventListener('click', changeHatScarfColor );
scarf.addEventListener('click', changeHatScarfColor)


/////change tree

const tree = document.querySelector("#tree");
const colorstree = [
    "#99f19e",
    "#dae9f4",
    "#c6e5d9",
    "#C5C6B6",
    "#CADECC",
];
var changeTreeColorIndex = 0;

function changeTreeColor(){

        tree.style.fill = colorstree[changeTreeColorIndex];

    changeTreeColorIndex += 1;
    if(changeTreeColorIndex > 5){
        changeTreeColorIndex = 0;
    }
}

tree.addEventListener('click', changeTreeColor );



//morphing


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



// change flag Color
