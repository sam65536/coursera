// function Cat (name) {
//     this.name = null;
//     return {
//         name: name
//     }
// }
// var barsik = new Cat('Barsik');
// console.log(barsik.name);

// function Animal() {}
//
// Animal.prototype.sleep = function () {};
//
// function Cat() {}
//
// Cat.prototype = Animal.prototype;
// Cat.prototype.meow = function () {};
//
// function Dog() {}
//
// Dog.prototype = Animal.prototype;
// Dog.prototype.woof = function () {};
//
// var sharik = new Dog();
//
// sharik.woof();
// sharik.sleep();
// sharik.meow();

// var obj = Object.create(null);
// console.log(obj);

function  Animal(name) {
    this.name = name;
}

function Cat(name) {
    Animal.call(this, name);
}

Cat.prototype.purr = function () {};

var murzik = new Cat('Murzik');

console.log(murzik.name);
murzik.purr();