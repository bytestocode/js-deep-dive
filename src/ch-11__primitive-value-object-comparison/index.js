var str = "string";

str[0] = "K"; // 반영안됨

console.log(str); // string

/*
 *
 */
var person1 = {
  name: "Lee",
};

var person2 = {
  name: "Lee",
};

console.log(person1 === person2); // false
console.log(person1.name === person2.name); // true
