const textArea = document.querySelector('textarea');
const counter = document.querySelector('.counter');
const clear = document.querySelector('button');

let timerId = setInterval(count, 1000);

function count(){
    let len = textArea.value.length;
    console.log(`${len}`);
    counter.textContent = len;
}

clear.addEventListener('click',function(){
    clearInterval(timerId);
    textArea.value = "";
    counter.textContent = 0;
    timerId = setInterval(count, 1000);
});


