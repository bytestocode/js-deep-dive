// 14.1.1 지역 변수의 생명 주기
var x = "global";

function foo() {
  console.log(x); // undefined - 변수 호이스팅 때문에
  var x = "local";
}

foo();
console.log(x); // global

// 14.3.3 모듈 패턴
var Counter = (function () {
  var num = 0;

  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
}());

console.log(Counter.num); // undefined
console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0
