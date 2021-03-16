const messWMe = document.querySelector('.mess-with-me');
messWMe.style.fontSize = "40px";

const messPara = document.querySelector("p.mess-with-me");
messPara.style.backgroundColor = "green";

const hide = document.querySelector('#hide-me-area');
hide.style.display = "none";

const firstdino = document.querySelector("#triceratops");
firstdino.style.width = "324px";





function changeBackgroundToOrange(){
    messWMe.style.backgroundColor = "orange";
}
messWMe.addEventListener('click', changeBackgroundToOrange);

function RedBorder (){
    firstdino.style.border = "1px solid red"
}
firstdino.addEventListener('click', RedBorder);

function trans (){
    const feathers = document.querySelector("#feathers")
    feathers.style.opacity = "50%"
}

feathers.addEventListener('click', trans)

const buttonSwitch = document.querySelector("#toggle");

function rowColor(){
    const rows = document.querySelector("#row");
    rows.style.backgroundColor = "green";
}

buttonSwitch.addEventListener('click', rowColor);





const club = document.querySelector('#biggify');

function big (){
    club.style.width = "200px";
}

club.addEventListener("mouseover", big);