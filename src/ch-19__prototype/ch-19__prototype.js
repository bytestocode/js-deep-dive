// 19장 프로토타입
// 예제 19-03
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  }
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea);

// 예제 19-04
function CircleExtendsProto(radius) {
  this.radius = radius;
}

CircleExtendsProto.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
}

const circle3 = new CircleExtendsProto(3);
const circle4 = new CircleExtendsProto(4);

console.log(circle3.getArea === circle4.getArea);
