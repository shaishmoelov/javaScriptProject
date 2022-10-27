var b1 = document.querySelector('#btn1');
var b2 = document.querySelector('#btn2');
var panel = document.querySelector('p');

function writeText(text) {
    return function(text){
        panel.textContent = text;
    }
}
b2.addEventListener('click', writeText('Nice To Meet You'));
b1.addEventListener('click', writeText('Yo'));
