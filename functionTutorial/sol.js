var b1 = document.querySelector('#btn1');
var b2 = document.querySelector('#btn2');
var panel = document.querySelector('p');

function writeText(text) {
    const k = function(){
        panel.innerHTML = this.innerHTML;
    }
    return k;
}
b2.addEventListener('click', writeText('Nice To Meet You'));
b1.addEventListener('click', writeText('Yo'));
