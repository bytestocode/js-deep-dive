// 20장 strict mode

(function (a) {
  "use strict";
  a = 2;
  console.log(arguments); // [Arguments] { '0': 1 }
})(1);
