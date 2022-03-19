// 27장 배열

// 배열 메서드
// mutator: 원본 배열을 변경하는 파괴적 메서드
// accessor: 원본 배열을 변경하지 않는 비파괴적 메서드

const arr = [1, 2, 3];

Array.isArray([]);
// return: true or false

arr.indexOf(2, 2);
// 1st arg: 찾는 요소
// 2nd arg: 찾기 시작할 인덱스
// return: 찾는 요소를 가진 첫번째 인덱스, 못찾으면 -1

arr.includes(2);
!arr.includes(2);
// return: true or false

// 파괴적
arr.push(3);
// 배열 마지막에 요소 추가
// return: 변경된 배열의 length

// 비파괴적
const newArr = [...arr, 3];
// 스프레드 문법으로 비파괴적 접근 가능

// 파괴적
arr.pop();
// 배열의 마지막 요소를 제거
// return: 마지막 요소

// 파괴적
arr.unshift(3, 4);
// 배열 맨 앞에 요소 추가
// return: 변경된 배열의 length

// 비파괴적
const newArr = [3, 4, ...arr];
// 스프레드 문법으로 비파괴적 접근 가능

// 파괴적
arr.shift();
// 배열의 첫번째 요소를 제거
// return: 첫번째 요소

// 비파괴적
arr.concat(3);
arr.concat([4, 5]);
// return: 배열의 마지막에 요소 추가한 새로운 배열 (배열을 추가할 경우 배열을 분해시켜서 추가해 줌)
// ES6 스프레드 문법 권장 (push, unshift, concat 비추)

const arr = [1, 2, 3, 4];
// 파괴적
arr.splice(1, 2, 20, 30);
// 1st arg: 시작할 인덱스
// 2nd arg: (옵션) 삭제할 개수
// 3rd arg: (옵션) 전달된 인수들을 삭제된 위치에 추가
// return: 삭제한 요소들로 이루어진 배열

// 비파괴적
const newArr = arr.slice(0, 1);
// 1st arg: 시작할 인덱스
// 2nd arg: (옵션 - 생략시 배열의 길이가 기본 값) 마지막 인덱스 (미포함)
// 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환 (얕은 복사)

// 비파괴적
const newArr = arr.join("");
// return: 배열의 모든 요소를 문자로 변환하고, 인수로 전달된 구분자로 연결한 문자열

// 파괴적
arr.reverse();
// 원본 배열의 순서를 반대로 뒤집는다.

// 파괴적
arr.fill(0, 1, 2);
// 원본 배열의 값을 인수로 전달된 값으로 채워버린다
// 1st arg: 채울 값
// 2nd arg: (옵션) 요소 채우기를 시작할 인덱스
// 3rd arg: (옵션) 요소 채우기를 멈출 인덱스 (미포함)

// 비파괴적
arr.includes(1);
// 2nd arg: (옵션) 검색을 시작할 인덱스 지정, 음수도 가능(length + index)
// return: true or false

// 비파괴적
arr.flat();
// 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화

// 배열 고차 함수

const fruits = ["Banana", "Orange", "Apple"];

// 파괴적
fruits.sort();
// 원본 배열을 오름차순으로 정렬
fruits.sort((a, b) => a - b);

fruits.forEach(() => {});

// 예제 27-117
const fruits = ["banana", "apple", "orange", "orange", "apple"];

const count = fruits.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

console.log(count);
