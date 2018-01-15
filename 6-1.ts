/**
 * Created by lixingda on 2018/1/15.
 */
//函数新特性

//用...来声明参数的时候,可以传任意的数据,当做数组来处理
function fun1(...hello) {
    hello.forEach(function (item) {
        console.log(item)
    })
}

fun1(1,2,3,4,5);
fun1(1,2,3);