/**
 * Created by lixingda on 2018/1/15.
 */
var myname = "lee";
//默认参数: 带参数的默认值放在最后
function test(a, b, c) {
    if (c === void 0) { c = 'jojo'; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test('aa', 'bb');
//可选参数: b加?后参数可以不传,打印出来是undefined
//可选参数和默认参数一样 ,必须声明在必选参数的后面,否则会报错
function test(a, b, c) {
    if (c === void 0) { c = 'jojo'; }
    console.log(a);
    if (!b) {
        console.log('hahahaha');
    }
    console.log(b);
    console.log(c);
}
test('aa');
//# sourceMappingURL=ts5-2.js.map