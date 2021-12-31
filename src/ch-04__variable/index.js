let 변수;

console.log(변수); // undefined

// const 변수 = "초기화";

console.log(score); // undefined

var score = 100;

// console.log(letScore); // Error: Cannot access 'letScore' before initialization
//
// let letScore = 100;

console.log(score2); // undefined

score2 = 80;
var score2;

console.log(score2); // 80

// const
const arr = { a: 1, b: 2 };

arr.a = 10;

console.log(arr);
