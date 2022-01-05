// 12.4.3 함수 생성 시점과 함수 호이스팅
// 예제 12-12
// 함수 참조
console.dir(add); // [Function: add]
console.dir(sub); // undefined

// 함수 호출
console.log(add(5, 2)); // 7
// console.log(sub(2, 5));

// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식 (권장)
var sub = function (x, y) {
  return x - y;
};

/*
 * 12.5.2 인수 확인
 */
function typeCheckAdd(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("인수는 모두 숫자 값이어야 합니다.");
  }

  return x + y;
}

// console.log(`타입체크 함수: ${typeCheckAdd(2)}`);
// console.log(`타입체크 함수: ${typeCheckAdd("A", "B")}`);

/*
 * 12.7 다양한 함수의 형태
 */
// 즉시 실행 함수
res = (function () {
  const a = 3;
  const b = 5;
  return a * b;
})();

console.log(res);

res2 = (function (a, b) {
  return a * b;
})(4, 5);

console.log(res2);

// 재귀 함수
function factorial1(n) {
  if (n <= 1) return 1;
  return n * factorial1(n - 1);
}

// 재귀 함수 => 반복문
function factorial2(n) {
  // if (n <= 1) return 1;

  var res = n;
  while (--n) res *= n;
  return res;
}

console.log(`팩토리얼: ${factorial2(1)}`);

// 콜백 함수
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logOdds = function (i) {
  if (i % 2) console.log(i);
};

repeat(5, logOdds);
