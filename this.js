
// num1 = 100
// function sum(){
//   let num1= 10;
//   console.log(this.num1);
// }
// console.log(this);




// this.name="vishal"
// const person = {
//     name : 'John',
//     age : 21,
//     fullname : function () {
//         console.log(this.name);
//     },
//     arrowfull : () =>{
//         console.log(this.name);
//     }
// }
// person.fullname()
// person.arrowfull()



function logMessage() {
  console.log(this.message); // What is logged?
}
const object = {
    message: 'Hello, World!',
  };
//logMessage();  //object 
  //setTimeout(object.logMessage, 1000); //GLobal
let l = logMessage.bind(object)
l(); 

// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
// const object = {
//   length: 5,
//   method() {
//     arguments[0]();
//   }
// };
// object.method(callback, 1, 2);