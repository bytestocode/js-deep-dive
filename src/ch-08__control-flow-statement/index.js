/*
 * continue 문
 */

var string = "Hello world.";
var search = "l";
var count = 0;

// continue 문을 사용하지 않을 경우
for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    count++;
    // code
    // code
  }
}

// continue 문을 사용할 경우: 들여쓰기 한 단계를 줄일 수 있음
for (var i = 0; i < string.length; i++) {
  if (string[i] !== search) continue;

  count++;
  // code
  // code
  // code
}
