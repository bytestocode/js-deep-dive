// 예제 13-03
var x = "global";

function foo() {
  var x = "local";
  console.log(x);
}

foo(); //local

console.log(x); //global

// 그림 13-2
// 상위 스코프에서 유요한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만
// 하위 스코프에서 유효한 변수를 상위 스코프에서 참조할 수 없다
var x = "global x";
var y = "global y";

function outer() {
  var z = "outer's local z";

  console.log(x); // global x
  console.log(y); // global y
  console.log(z); // outer's local z

  function inner() {
    var x = "innner's local x";

    console.log(x); // inner's local x
    console.log(y); // global y
    console.log(z); // outer's local z
  }

  inner();
}

outer();

console.log(x); // global x
// console.log(z); // ReferenceError: z is not defined

// 13.3.2 스코프 체인에 의한 함수 검색
// 예제 13-06
function foo() {
  console.log("global function foo");
}

function bar() {
  function foo() {
    console.log("local function foo");
  }
  foo();
}

bar(); // local function foo

// 13.4 함수 레벨 스코프
// 예제 13-7
var x = 1;

if (true) {
  var x = 10;
}

console.log(x); // 10

// 예제 13-08
// var 키워드로 선언된 변수는 함수 레벨 스코프를 가짐
var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

console.log(i); // 5

// 13.5 렉시컬 스코프
// 예제 13-09
// 렉시컬 스코프: 함수를 어디서 정의했는지에 따라 함수의 상위 스코프를 결정
// cf) 동적 스코프: 함수를 어디서 호출했는지에 따라 함수의 상위 스코프를 결정
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1
