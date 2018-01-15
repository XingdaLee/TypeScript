//定义name是字符串类型
var name: string = 'xingdalee';

//使用any时alias可以是任意的数据类型
var alias: any = 'xixi';

var age: number = 12;

var man: boolean = true;

//声明test不需要任何的返回值
function test(): void {

}
//方法声明返回值,也可以给参数声明数据类型,调用的时候只能拿数字去调用
function test(name: string): string {
    return "";
}

//自定义类型
class Person {
    name: string;
    age: number;
}

var zhangsan: Person = new Person();
zhangsan.age = 18;
zhangsan.name = "zhangsan";