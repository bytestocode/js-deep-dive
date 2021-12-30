// 문(statement): 컴퓨터에 내리는 명령
var x; // 변수 선언문

x = 5; // 할당문

function foo() {} // 함수 선언문

if (x > 1) {
  console.log(x);
} // 조건문

for (var i = 0; i < 2; i++) {
  console.log(i);
} // 반복문

// test
console.log((x = 6));
