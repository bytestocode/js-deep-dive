// 24장 클로저
// 클로저 : 외부 함수보다 중첩 함수가 더 오래 유지되는 경우
// 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다.
// 이러한 중첩 함수를 클로저(Closure)라고 한다.

const x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(`x: ${x}`);
}

foo(); // 1
bar(); // 1

// 예제 24-05
const y = 1;

function outer() {
  const y = 10;
  const inner = function () {
    console.log(`y: ${y}`);
  };
  return inner;
}

const innerFunc = outer();
innerFunc(); // 10

// 예제 24-12
const counter = (function () {
  let num = 0;
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2

console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0
