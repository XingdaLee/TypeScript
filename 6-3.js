/**
 * Created by lixingda on 2018/1/15.
 */
//destructuring析构表达式: 通过表达式将对象或数组拆解成任意数量的变量
//从对象里拆分
function getStock() {
    return {
        code: "IBM",
        price: {
            price1: 100,
            price2: 200
        }
    };
}
var _a = getStock(), code = _a.code, price = _a.price;
console.log(code);
console.log(price);
//另一种赋值变量的写法和取对象里的对象的方式
var _b = getStock(), codex = _b.code, price2 = _b.price.price2;
console.log(price2);
console.log(codex);
//从数组中拆分
//拿前两个数据
var array1 = [1, 2, 3, 4, 5];
var number1 = array1[0], number2 = array1[1];
console.log(number1); // 1
console.log(number2); // 2
//拿后两个数据
var array1 = [1, 2, 3, 4, 5];
var number1 = array1[2], number2 = array1[3];
console.log(number1); // 1
console.log(number2); // 2
//使用	Rest and Spread 析构表达式来获取数据
var array1 = [1, 2, 3, 4, 5];
var number1 = array1[0], number2 = array1[1], others = array1.slice(2);
console.log(number1); // 1
console.log(number2); // 2
console.log(others); // 结果是数组 [3,4,5]
//使用析构表达式进行函数的调用
var array1 = [1, 2, 3, 4, 5];
// 参数要用数组包起来
function doSomething(_a) {
    var number1 = _a[0], number2 = _a[1], others = _a.slice(2);
    console.log(number1); // 1
    console.log(number2); // 2
    console.log(others); // 结果是数组 [3,4,5]
}
doSomething(array1);
// 输出结果: 1, 2, [3, 4, 5]
//# sourceMappingURL=6-3.js.map