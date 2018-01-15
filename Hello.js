//定义name是字符串类型
var name = 'xingdalee';
//使用any时alias可以是任意的数据类型
var alias = 'xixi';
var age = 12;
var man = true;
//声明test不需要任何的返回值
function test() {
}
//方法声明返回值,也可以给参数声明数据类型,调用的时候只能拿数字去调用
function test(name) {
    return "";
}
//自定义类型
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var zhangsan = new Person();
zhangsan.age = 18;
zhangsan.name = "zhangsan";
//# sourceMappingURL=Hello.js.map