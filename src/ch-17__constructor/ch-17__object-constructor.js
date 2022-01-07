// 17장 생성자 함수에 의한 객체 생성
// 17.1 Object 생성자 함수
// 예제 17-01
const person = new Object();

person.name = "Park";
person.sayHello = function() {
  console.log(`Hi! My name is ${this.name}`);
};

console.log(person);
person.sayHello();


// 예제 17-02
const strObj = new String("Park");
console.log(typeof strObj);
console.log(strObj);

// 17.2.2 생성자 함수에 의한 객체 생성 방식
// 예제 17-04
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());
