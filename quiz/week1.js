// var student = {};
// Object.prototype.serialize = function () {};
//
// console.log('serialize' in student);
// console.log('serialize' in []);
// console.log('serialize' in new Date());
// console.log ('serialize' in Object);
// console.log('serialize' in Object.prototype);

// console.log(Object.prototype.toString());
//
// var student = {};
// var lecturer= {};
//
// lecturer.toString = function () {
//     return 'Woohoo!'
// }
//
// console.log(student.toString());
// console.log(lecturer.toString());
// console.log(lecturer.toString.call(student));

Object.prototype.serialize = function () {};
var student = {
    name: 'Ivan',
    getName: function () {
        return this.name;
    }
};

Object.defineProperty(student, 'type', {
    enumerable: false,
    value: 'student'
});

for (var key in student) {
    console.log(key);
}