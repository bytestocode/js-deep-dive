var obj = {};
var key = "hello";

obj[key] = "world";

console.log(obj); // { hello: 'world' }

// 프로퍼티 축약 표현
let x = 1,
  y = 2;
const obj2 = { x, y };

console.log(obj2); // { x: 1, y: 2 }
