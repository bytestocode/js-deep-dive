// 예제 19-09
// Object.defineProperties 메서드를 사용하면
// 여러 개의 프로퍼티를 한번에 정의할 수 있다.

const person = {};

Object.defineProperties(person, {
  // 데이터 프로퍼터 정의
  firstName: {
    value: "Consume",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "onWave",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  // 접근자 프로퍼티 정의
  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
      [this.firstName, this.lastName] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
  },
});

person.fullName = "JC Park";
console.log(person); // { firstName: 'JC', lastName: 'Park', fullName: [Getter/Setter] }

//
// 예제 16-14
// 불변 객체를 구현하려면 객체를 값으로 갖는 모든 프로퍼티에 대해
// 재귀적으로 Object.freeze 메서드를 호출해야 합니다.
function deepFreeze(target) {
  if (target && typeof target === "object" && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
  return target;
}

const person2 = {
  name: "void",
  address: { city: "Suwon" },
};

deepFreeze(person2);

console.log(Object.isFrozen(person2)); // true
console.log(Object.isFrozen(person2.address)); // true

person2.address.city = "Busan";
console.log(person2); // { name: 'void', address: { city: 'Suwon' } }
