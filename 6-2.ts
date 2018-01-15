/**
 * Created by lixingda on 2018/1/15.
 */

// generator函数: 控制函数的执行过程,手工暂停和恢复代码执行

function* doSomething() {
    console.log("start");

    yield;

    console.log('finish');
}

var func1 = doSomething();

// 第一次调用next时会在 yield处停止
func1.next();

// 再次调用时，会从yield处继续执行，根据yield以此类推
func1.next();