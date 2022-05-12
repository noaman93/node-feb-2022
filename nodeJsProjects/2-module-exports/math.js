function greet() {
  console.log("Good Afternoon!");
}

const square = function (numb) {
  return numb * numb;
};

const cube = (numb) => {
  return numb * numb * numb;
};

const PI = 3.14;

const data = {
  greet,
  square,
  cube,
  PI,
  students: ["ali", "Fazi", "Hamid"],
};
// const math = {
//   greet: greet,
//   square: square,
//   cube: cube,
//   PI: PI,
// };

module.exports = data;

// module.exports.greet = greet;
// module.exports.square = square;
// module.exports.cube = cube;
// module.exports.PI = PI;
