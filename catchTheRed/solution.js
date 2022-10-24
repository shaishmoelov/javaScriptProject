const squre1 = document.querySelector('.squre1');
const squre2 = document.querySelector('.squre2');
const squre3 = document.querySelector('.squre3');
const squre4 = document.querySelector('.squre4');
const squre5 = document.querySelector('.squre5');
const squre6 = document.querySelector('.squre6');
const squre7 = document.querySelector('.squre7');
const squre8 = document.querySelector('.squre8');
const squres = document.querySelector('.squres');


function makeAllGrey(){
    squre1.style.backgroundColor = "grey";
    squre2.style.backgroundColor = "grey";
    squre3.style.backgroundColor = "grey";
    squre4.style.backgroundColor = "grey";
    squre5.style.backgroundColor = "grey";
    squre6.style.backgroundColor = "grey";
    squre7.style.backgroundColor = "grey";
    squre8.style.backgroundColor = "grey";
}

function turnRed(event){
    makeAllGrey();
    let i = Math.floor(Math.random() * 8);
    const squre = document.querySelector(`.squre${i}`);
    let j = 5;
    squre.style.backgroundColor = "red";
}

squres.addEventListener('click', turnRed);
