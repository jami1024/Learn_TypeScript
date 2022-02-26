// 当前foo函数, 在被其他地方调用时, 没有做任何的参数校验
// 1> 没有对类型进行校验
// 2> 没有对是否传入参数进行校验
function foo1(message) {
  if (message) {
    console.log(message.length);
  }
}

function foo1(message) {
("Hello World");
foo1("你好啊,张三");

foo1(123)

foo1()

// 永远执行不到
console.log("渲染界面成千上万行的JavaScript代码需要执行, 去渲染界面")


// 定义变量
let bar = "abc";

bar = 123;

bar.length