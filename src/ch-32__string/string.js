// 예제 32-37 string replace 메서드
function camelToSnake(camelCase) {
  return camelCase.replace(/.[A-Z]/g, (match) => {
    return match[0] + "_" + match[1].toLowerCase();
  });
}

const camelCase = "helloWorld";
console.log(camelToSnake(camelCase));
