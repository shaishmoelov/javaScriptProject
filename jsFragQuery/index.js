const x = document.querySelectorAll('input');

function makeAsentence(input){
    input.value = "A";
}

x.forEach(makeAsentence);


for(let y of x){
    y.value = `${y.offsetLeft}`;
}