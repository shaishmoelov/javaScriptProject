// class Person{
//     constructor(name_){
//         this.age = 1;
//         this.name = name_;
//     }

//     hello(){
//         console.log(`My name is ${this.name} and I am ${this.age} years old`)
//     }

//     growUp(){
//         this.age = this.age+1;
//     }
// }


// const p1 = new Person('Mike');
// const p2 = new Person('Jim');

// // prints: My name is Mike and I am 1 years old
// p1.hello();

// p1.growUp();

// // prints: My name is Mike and I am 2 years old
// p1.hello();

// // prints: My name is Jim and I am 1 years old
// p2.hello();


//Part 2*********************************************************************************************

class Summer{
    constructor(){
        this.sum = 0;        
    }

    add(x){
        this.sum += x;
    }

    getCurrentSum(){
        return this.sum;
    }

}

const s1 = new Summer();
const s2 = new Summer();

s1.add(10);
s1.add(20);

s2.add(30);

s2.add(5);

// prints 30
console.log(s1.getCurrentSum());

// prints 35
console.log(s2.getCurrentSum());
