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
    }
}

var { code, price } = getStock();

console.log(code);
console.log(price);

//另一种赋值变量的写法和取对象里的对象的方式
var { code: codex, price: { price2 } } = getStock();
console.log(price2);
console.log(codex);

//从数组中拆分

//拿前两个数据
var array1 = [1, 2, 3, 4, 5];
var [number1, number2] = array1;
console.log(number1); // 1
console.log(number2); // 2

//拿后两个数据
var array1 = [1, 2, 3, 4, 5];
var [,,number1, number2] = array1;
console.log(number1); // 1
console.log(number2); // 2

//使用	Rest and Spread 析构表达式来获取数据
var array1 = [1, 2, 3, 4, 5];
var [number1, number2, ...others] = array1;
console.log(number1); // 1
console.log(number2); // 2
console.log(others); // 结果是数组 [3,4,5]

//使用析构表达式进行函数的调用

var array1 = [1, 2, 3, 4, 5];
// 参数要用数组包起来
function doSomething([number1, number2, ...others]) {
    console.log(number1); // 1
    console.log(number2); // 2
    console.log(others); // 结果是数组 [3,4,5]
}

doSomething(array1);
// 输出结果: 1, 2, [3, 4, 5]
