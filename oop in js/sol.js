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

// class Summer{
//     constructor(){
//         this.sum = 0;        
//     }

//     add(x){
//         this.sum += x;
//     }

//     getCurrentSum(){
//         return this.sum;
//     }

// }

// const s1 = new Summer();
// const s2 = new Summer();

// s1.add(10);
// s1.add(20);

// s2.add(30);

// s2.add(5);

// // prints 30
// console.log(s1.getCurrentSum());

// // prints 35
// console.log(s2.getCurrentSum());


//************************************************part 3******************************************************************

class Race{
    constructor(){
        this.cars = [];
    }

    addCars(car1, car2, car3){
        this.cars.push(car1);
        this.cars.push(car2);
        this.cars.push(car3);
    }

    winner(){
        let max_car = this.cars[0];
        for(let car of this.cars){
            if(car.speed > max_car.speed){
                max_car = car;
            }
        }
        return max_car;
    }
}


class Car {
    constructor(color, speed=0) {
      this.color = color;
      this.speed = speed;
    }
  
    drive(speed) {
      this.speed = speed;
    }
  
    isFasterThan(other) {
      return this.speed > other.speed;
    }
  }
  
  const c1 = new Car('red');
  const c2 = new Car('blue', 50);
  const c3 = new Car('black');
  
  const race = new Race();
  race.addCars(c1, c2, c3);
  
  c1.drive(20);
  c3.drive(10);
  
  const winningCar = race.winner();
  console.log('And the winner is: ' + winningCar.color);