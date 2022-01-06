// 15
// 15.2.2 블록 레벨 스코프 - let 키워드로 선언한 변수는 블록 레벨 스코프를 따른다
// 예제 15-06
let foo = 1;

{
  let foo = 2;
  let bar = 3;
}

console.log(foo); // 1
// console.log(bar); // ReferenceError: bar is not defined

// 15.2.3 변수 호이스팅
// 예제 15-09
console.log(foo2); // ReferenceError: Cannot access 'foo2' before initialization

let foo2;
console.log(foo2); // undefined

foo2 = 1;
console.log(foo2); // 1

// 예제 15-10
let foo3 = 1;

{
  console.log(foo3); // ReferenceError: Cannot access 'foo3' before initialization
  let foo3 = 2;
}

// 15.3 const 키워드
// 예제 15-18
const TAX_RATE = 0.1;

let preTexPrice = 100;

let afterTaxPrice = preTexPrice + preTexPrice * TAX_RATE;

console.log(afterTaxPrice);
