

const strenght = document.querySelector('.strenght');
const password = document.querySelector('.password');
let x = 0;
let letterFlag = false;
let capitalFlag= false;
let numberFlag = false;
let signFlag = false;


let timerId = setInterval(checkStrenght,1000);

function checkStrenght(){
    x = 0;
    letterFlag = hasLowerCase(password.vlaue);
    capitalFlag = hasUpperCase(password.value);
    numberFlag = haseNumber(password.value)
    signFlag = hasSign(password.value);
    x = password.textLength;
    if(x < 5){
        showWeakStrength();
    }else if(x >=5 && x < 8 && letterFlag && capitalFlag && numberFlag){;
        showMiddleStrength();
    }else if(x >= 8 && letterFlag && capitalFlag && numberFlag && signFlag) {
        showTopStrenght();
    }
}


function showWeakStrength(){
    strenght.style.backgroundColor = "grey";
}

function showMiddleStrength(){
    strenght.style.backgroundColor = "black";
}

function showTopStrenght(){
    strenght.style.backgroundColor = "blue";
}

function hasUpperCase(parola) {
    return /[A-Z]/.test(parola);
  }
  
function hasLowerCase(parola) {
    return /[a-z]/.test(parola);
}

function haseNumber(parola){
    return /[0-9]/.test(parola);
}  

function hasSign(parola){
    return /[£$%^&*@~!]/.test(parola);
}
