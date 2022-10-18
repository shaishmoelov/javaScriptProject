function getLeft(arr, widths, idx){
    let res = 0;
    for(let i = 0; i < idx; i++){
        res += widths[i];
    }
    return -res;
}

const b = [1];
const x = [200,300,500];
console.log(getLeft(b,x,3));


function getFastest(cars){
    let res = '';
    let max = -2;
    for(let car of cars){
        if(car.speed > max){
            max = car.speed;
            res = car.name;
        }
    }
    return res;
}

const cars = [{ name: 'c1', color: 'red', speed: 10}, { name: 'c2', color: 'blue', speed: 20}];
console.log(getFastest(cars));