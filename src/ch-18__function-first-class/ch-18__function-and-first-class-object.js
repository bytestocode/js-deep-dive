// 18장 함수와 일급 객체
// 자바스크립트의 함수 === 일급 객체
// 일급 객체의 조건
// 1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
// 2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.

// 예제 18-01
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

const predicates = { increase, decrease };

function makeCounter(predicate) {
  let num = 0;

  return function () {
    num = predicate(num);
    return num;
  };
}

const increaser = makeCounter(predicates.increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(predicates.decrease);
console.log(decreaser());
console.log(decreaser());

// 18.2.1 argumnets 프로퍼티
// 예제 18-06
function sum() {
  let res = 0;

  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum(1, 2, 4));

// 예제 18-07
function sum() {
  const array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

// [요약]
// 함수는 객체
// 함수는 객체로써, 데이터 프로퍼티를 몇가지 가지고 있음
