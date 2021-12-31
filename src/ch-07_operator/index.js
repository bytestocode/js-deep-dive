/*
 * + 단항 연산자
 */

var x = "1";

console.log(+x); // 1
console.log(x); // "1"

x = true;
console.log(+x); // 1
console.log(-x); // -1
console.log(x); // true

x = false;
console.log(+x); // 0
console.log(-x); // -0
console.log(x); // false

x = "Hello";
console.log(+x); // NaN
console.log(x); // "Hello"

/*
 * NaN 일치 비교 연산자
 */
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true

/*
 * 양의 0, 음의 0
 */
console.log(0 === -0); // true
console.log(0 == -0); // true

/*
 * Object.is
 */
console.log(Object.is(+0, -0)); // true
console.log(Object.is(NaN, NaN)); // true

/*
 * 지수 연산자
 */

console.log(2 ** 2); // 4
console.log(2 ** 2.5); // 5.65685424949238
console.log(2 ** 0); // 1
console.log(2 ** -2); // 0.25

console.log(Math.pow(2, 2)); // 4
console.log(Math.pow(2, 2.5)); // 5.65685424949238
console.log(Math.pow(2, 0)); // 1
console.log(Math.pow(2, -2)); // 0.25
