// 24장 클로저
// 클로저 : 외부 함수보다 중첩 함수가 더 오래 유지되는 경우
// 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다.
// 이러한 중첩 함수를 클로저(Closure)라고 한다.

// 예제 24-05
const x = 1;

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

const innerFunc = outer();
innerFunc(); // 10
