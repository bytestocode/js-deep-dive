// 예제 26-49
function foo(...rest) {
  console.log(rest);
}

foo(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]

// 예제 26-62
function sum(x, y = 0) {
  console.log(arguments);
}

console.log(sum.length); // 1

sum(1); // [Arguments] { '0': 1 }
sum(1, 2); // [Arguments] { '0': 1, '1': 2 }
