console.log((10).toString() === 10 + ""); // true

if (!null) console.log(null + " is falsy value"); // null is falsy value
if (!"") console.log("" + " is falsy value"); //  is falsy value

console.log(parseInt("1.63")); // 1
console.log(parseFloat("123")); // 1233

/*
 * 단축 평가
 */

// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로터피를 참조할 때
var elem = null;
var value = elem && elem.value; // elem이 Truthy 값이면 elem.value로 평가된다.

console.log(elem); // null

// 옵셔널 체이닝 연산자
var elem = null;
var valueES11 = elem?.value;
console.log(valueES11); // undefined

// null 병합 연산자
var foo = "" ?? "default string";
console.log(foo); // ""
