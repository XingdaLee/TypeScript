// 带参数，不带大括号的方式
var sum = (arg1, arg2) => arg1 + arg2 
// 编译后：
// var sum = function (arg1, arg2) { return arg1 + arg2; };

// 无参数的箭头表达式
var sum1 = () => {

}
// 编译后：
// var sum1 = function () {

// };

// 只有一个参数
var sum2 = arg1 => {
  console.log(arg1);
}
// 编译后：
// var sum2 = function (arg1) {
//   console.log(arg1);
// };

// 只取数组中的整数
var array = [1, 2, 3, 4, 5]
console.log(array.filter(val => val % 2 == 0));
// 编译后：
// var array = [1, 2, 3, 4, 5];
// console.log(array.filter(function (val) { return val % 2 == 0; }));
