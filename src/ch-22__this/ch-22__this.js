// 22장 this

// 예제 22-21
function convertArgsToArray() {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
  const arr = Array.prototype.slice.call(arguments);
  console.log(arr); // [ 1, 2, 3 ]
  return arr;
}

convertArgsToArray(1, 2, 3);
