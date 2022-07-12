// var x = 1;
// console.log(x);
// function a() {
//   x = 10;
//   console.log(x);
// }

// a();

// output :-
// 1
// 10

// // -----------------------------------

// let x = 10;
// console.log(x);
// function a() {
//   x = 100;
//   console.log(x);
// }
// a();
// x = 1000;

// output :-
// 10
// 100

// // -----------------------------------

// const x = 100;
// console.log(x);
// function a() {
//   x = 10;
//   console.log(x);
// }
// a();

// output :-
// 100
// then there is typeError as x is declared as constant but we try to change it in function

// // -----------------------------------

// function a() {
//   console.log(x);
// }
// a();
// var x = 2;
// output :-
// in this case, coz of hoisting, x will be assigned a memory block but x is yet to be initialized after the function call so undefined is printed (as its value is not declared yet by the time of printing)

// // -----------------------------------

// let x;
// function b() {
//   console.log(x);
// }
// b();
// x = 2;
// output :-
// x is defined but haven't assigned a value by the time it is printed so it will be undefined
// // -----------------------------------

// function a() {
//   console.log(x);
// }
// a();
// let x = 2;

// output :-
// x is initialized after it is accessed so error is thrown

// // -----------------------------------

// var a = 1;
// let b = 2;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(b);

// output :-
// 10
// 20
// 30
// 2
// // ----------------------------------

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z);
// z();

// output :-
// function definition of y i.e.,
// f y(){
//   console.log(a);
// }
// 7

// // ----------------------------------

// function x() {
//   for (var i = 0; i < 6; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   }
// }
// x();

// output :-
// 6 is printed 6 times
// // ----------------------------------

// function x() {
//   for (var i = 0; i < 6; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, 1000 * i);
//     }
//     close(i);
//     console.log('interview');
//   }
// }
// x();

// output :-
// interview is printed 6 times
// 0
// 1
// 2
// 3
// 4
// 5

// -----------------------------------

const person = {
  name: 'nagarro',
  age: 100,
  isAutherised: false,
  isUnicorn: true,
  bestDomain: 'analytics',
};

// question1: make copy of the object and manipulate values in the new copied object

// method-1 to make copy of object using spread operator
const person2 = { ...person };

// method-2 make copy by individually assigning properties and values to object
// const person2 = {};
// person2.name = 'nagarro';
// person2.age = 100;
// person2.isAutherised = false;
// person2.isUnicorn = true;
// person2.bestDomain = 'analytics';

console.log('person original object :-');
console.log(person);
console.log('\n\n');
console.log('person copied object :-');
console.log(person2);
person2.name = 'piyush saxena';
console.log('\n\n\nname changed in the copied object');
console.log(person2);
person2.bestDomain = 'software development';
console.log('\n\n\nbest domain changed in the copied object');
console.log(person2);
console.log('\n\n');
console.log('person original object :-');
console.log(person);
console.log('\n\n');

// question2: print all the properties using appropriate for loop
for (const i in person2) {
  console.log(`{ property : ${i}, value : ${person2[i]} }`);
}

// theory questions you should also prepare
// 1. what is GEC (global execution context)? -- mcp and cep
// 2. single threaded meaning?
// 3. what is hoisting?
// 4. call back queue
// 5. let and const hoisted hote hai?? and kahan hote hai? (dead temporal zone mei hote hai) -->  read about dead temporal zone
// 6. block scope and global scope
// 7. closure?
// 8. event loop
// 9. asynchronous
// 10. for each loop
