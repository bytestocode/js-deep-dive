// 21장 빌트인 객체
// 예제 21-05
// 문자열에 대해 마침표 표기법으로 접근하면
// 그 순간 래퍼 객체(wrapper object)인 String 생성자 함수의 인스턴스가 생성되고,
// 문자열은 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
const str = "hi";

console.log(str.length); // 2
console.log(str.toUpperCase()); // HI

console.log(typeof str); // string

// 예제 21-06
const str2 = "hello";
str2.name = "Park";

console.log(str2.name); // undefined
