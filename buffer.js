const buff1 = Buffer.alloc(10)
const buff2 = Buffer.from("hello")
buff1.toJSON()
console.log(buff2.toString());
console.log(buff1.length);
console.log(buff2.length);
buff2.write("world!")
console.log(buff2.toString());

console.log(module)
