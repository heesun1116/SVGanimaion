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
///////chane background




///// Change monster
const monster1_1 = document.querySelector('.monster1_1');
const monster1_2 = document.querySelector('.monster1_2');
const monster1_3 = document.querySelector('.monster1_3');
const monster1_4 = document.querySelector('.monster1_4');
const monster1_5 = document.querySelector('.monster1_5');
const monster1_6 = document.querySelector('.monster1_6');
const monster1_7 = document.querySelector('.monster1_7');

const monster1Colors = document.querySelectorAll("#monster1 path");
const colors = [
    "#ffda8e",
    "#AAABD3",
    "#566270",
    "#EE7785",
    "#6AAFE6",
    "#79a8a9"
];
var changeMonster1ColorIndex = 0;

function changeMonster1Color(){
    for(i = 0; i < monster1Colors.length ; i++){
        monster1Colors[i].style.fill = colors[changeMonster1ColorIndex];
    }
    changeMonster1ColorIndex += 1;
    if(changeMonster1ColorIndex > 5){
        changeMonster1ColorIndex = 0;
    }
}


monster1_1.addEventListener('click', changeMonster1Color);
monster1_2.addEventListener('click', changeMonster1Color);
monster1_3.addEventListener('click', changeMonster1Color);
monster1_4.addEventListener('click', changeMonster1Color);
monster1_5.addEventListener('click', changeMonster1Color);
monster1_6.addEventListener('click', changeMonster1Color);
monster1_7.addEventListener('click', changeMonster1Color);


////////change monster2 color

const monster2_1 = document.querySelector(".monster2_1");
const monster2_2 = document.querySelector(".monster2_2");
const monster2_3 = document.querySelector(".monster2_3");
const monster2_4 = document.querySelector(".monster2_4");
const monster2_5 = document.querySelector(".monster2_5");
const monster2_6 = document.querySelector(".monster2_6");
const monster2_7 = document.querySelector(".monster2_7");


const monster2Colors = document.querySelectorAll("#monster2 path");

var changeMonster2ColorIndex = 0;

function changeMonster2Color(){
    for(i = 0; i < monster2Colors.length ; i++){
        monster2Colors[i].style.fill = colors[changeMonster2ColorIndex];
    }
    changeMonster2ColorIndex += 1;
    if(changeMonster2ColorIndex > 5){
        changeMonster2ColorIndex = 0;
    }
}


monster2_1.addEventListener('click', changeMonster2Color );
monster2_2.addEventListener('click', changeMonster2Color);
monster2_3.addEventListener('click', changeMonster2Color);
monster2_4.addEventListener('click', changeMonster2Color);
monster2_5.addEventListener('click', changeMonster2Color);
monster2_6.addEventListener('click', changeMonster2Color);
monster2_7.addEventListener('click', changeMonster2Color);




////// change monster3 color
const monster3Colors = document.querySelectorAll("#monster3");
const monster3_1 = document.querySelector(".monster3_1");
const monster3_2 = document.querySelector(".monster3_2");

var changeMonsterColorIndex = 0;

function changeMonster3Color(){
    for(i = 0; i < monster3Colors.length ; i++){
        monster3Colors[i].style.fill = colors[changeMonsterColorIndex];
    }
    changeMonsterColorIndex += 1;
    if(changeMonsterColorIndex > 5){
        changeMonsterColorIndex = 0;
    }
}

monster3_1.addEventListener('click', changeMonster3Color );
monster3_2.addEventListener('click', changeMonster3Color );



/////// change ball1 color
const ball1 = document.querySelector("#ball1");

const colorsBall = [
    "#ef9e9f",
    "#2b90d9",
    "#7f9eb2",
    "#a5d296",
    "#99f19e",
    "#fcbe32"
];

var changeBall1ColorIndex = 0;

function changeBall1Color(){
        ball1.style.fill = colorsBall[changeBall1ColorIndex];

    changeBall1ColorIndex += 1;
    if(changeBall1ColorIndex > 5){
        changeBall1ColorIndex = 0;
    }
}
ball1.addEventListener("click", changeBall1Color)
////change ball2 color

const ball2 = document.querySelector("#ball2");

var changeBall2ColorIndex = 0;

function changeBall2Color(){
        ball2.style.fill = colorsBall[changeBall2ColorIndex];

    changeBall2ColorIndex += 1;
    if(changeBall2ColorIndex > 5){
        changeBall2ColorIndex = 0;
    }
}
ball2.addEventListener("click", changeBall2Color)




////// change color ball3
const ball3 = document.querySelector("#ball3");

var changeBall3ColorIndex = 0;

function changeBall3Color(){
        ball3.style.fill = colorsBall[changeBall3ColorIndex];

    changeBall3ColorIndex += 1;
    if(changeBall3ColorIndex > 5){
        changeBall3ColorIndex = 0;
    }
}
ball3.addEventListener("click", changeBall3Color)

///// Change hat color


const hat1 = document.querySelector("#hat1");
const colorsHat = [
    "#eb9f9f",
    "#cff0da",
    "#a3daff",
    "#C5C6B6",
    "#ED9282",
    "#f1bbba"
];
var changeHat1ColorIndex = 0;

function changeHat1Color(){
        hat1.style.fill = colorsHat[changeHat1ColorIndex];

    changeHat1ColorIndex += 1;
    if(changeHat1ColorIndex > 5){
        changeHat1ColorIndex = 0;
    }
}
hat1.addEventListener("click", changeHat1Color)


/////// change hat2 color
const hat2 = document.querySelector("#hat2");
var changeHat2ColorIndex = 0;

function changeHat2Color(){
        hat2.style.fill = colorsHat[changeHat2ColorIndex];

    changeHat2ColorIndex += 1;
    if(changeHat2ColorIndex > 5){
        changeHat2ColorIndex = 0;
    }
}
hat2.addEventListener("click", changeHat2Color)



////// change hat3 color
const hat3 = document.querySelector("#hat3");
var changeHat3ColorIndex = 0;

function changeHat3Color(){
        hat3.style.fill = colorsHat[changeHat3ColorIndex];

    changeHat3ColorIndex += 1;
    if(changeHat3ColorIndex > 5){
        changeHat3ColorIndex = 0;
    }
}
hat3.addEventListener("click", changeHat3Color)




///// change question
const question1 = document.querySelector('#Vector_24');
const question2 = document.querySelector('#ball');
const questionColors = document.querySelectorAll("#question path");

const colorsQuestion = [
    "#FFBC42",
    "#F16B6F",
    "#C5C6B6",
    "#AACD6E",
    "#77AAAD",
    "#353866"
]

var changeQuestionColorIndex = 0;

function changeQuestionColor(){
    for(i = 0; i < questionColors.length ; i++){
        questionColors[i].style.fill = colorsQuestion[changeQuestionColorIndex];
    }
    changeQuestionColorIndex += 1;
    if(changeQuestionColorIndex > 5){
        changeQuestionColorIndex = 0;
    }
}


question1.addEventListener('click', changeQuestionColor );
question2.addEventListener('click', changeQuestionColor);

////// change leaf color

const leaf = document.querySelector("#leaf");

var changeLeafColorIndex = 0;

const colorsLeaf = [
    "#cbe86b",
    "#a3daff",
    "#9baec8",
    "#eb9f9f",
    "#fbd14b"
]

function changeLeafColor(){

        leaf.style.fill = colorsLeaf[changeLeafColorIndex];
    changeLeafColorIndex += 1;
    if(changeLeafColorIndex > 5){
        changeLeafColorIndex = 0;
    }
}


leaf.addEventListener('click', changeLeafColor );







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
