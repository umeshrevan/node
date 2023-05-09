const prompt=require('prompt-sync')();
const fs = require('fs');
const getData = JSON.parse(fs.readFileSync('./user.json' , 'utf-8'));
console.log(getData);
var x;
x= prompt("Enter your name")
console.log("Enter your name is" +x)
// const user = {
//     id: 1,
//     completeName: "Jennifer Jones",
//     age: 20,
//   };
//   const data = JSON.stringify(user);
//   fs.writeFile("data.json", data, (error) => {
//     if (error) {
//       console.error(error);
  
//       throw error;
//     }
  
//     console.log("data.json written correctly");
//   });
