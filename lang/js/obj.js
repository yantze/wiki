// #1
var p = function(o) {
    this.a = 'b';
    this.b = o;
}

var c = new p('this is b');

p.prototype.d = function(t) {
    console.log(t);
}

c.d('help');

// #2
var p = function(o) {
    this.a = 'b';
    var pub = {
        demo: "demo"
        run: function() {
            this.b = a;
            console.log(b);
        },
    };
    return pub;
}

// #3
var p = function() {
  function ToProgress(opt, selector) {
    this.progressBar = document.createElement('div');
  }

  ToProgress.prototype.hide = function() {
    this.progressBar.style.opacity = '0';
  }

  return ToProgress
}();


// ===
// # detail

// common snip
var p = function(opt) {
  this.options = {
    color: '#69C',
    height: '12px',
    duration: '1s',
  }

  if(opt && typeof opt === 'object'){
    for(var key in opt){
      this.options[key] = opt[key]
    }
  }
}
;(function(){
  window.onload = function(){
    var g = new p();
  }
}()

// 闭包（Closure）是词法闭包（Lexical Closure）或函数闭包（function closures）的简称
// 对于 闭包函数的 突破
// 创建Person函数  
function Person()  
{  
    //locVal是个局部变量，原本应该该函数结束后立即失效  
    var locVal = 'yes!';  
    this.info = function()  
    { 
        //此处会形成闭包，当被调用的时候，locVal 的值不会消失
        document.writeln("locVal的值为：" + locVal);  
        return locVal;  
    } 
} 
var p = new Person();  
//调用p对象的info()方法  
var val = p.info();  
//输出val返回值，该返回值就是局部变量locVal。  
alert(val);  
/*
为Person对象增加info方法相当不好,有两点原因：
1，性能低下：每次创建实例都会创建info()函数，会造成内存泄漏，引起性能下降，实际上info()方法一个就好了
2，使得info()函数中的局部变量产生闭包：闭包会扩大局部变量的作用域，使得局部变量一直存活到函数之外的的地方
*/

//
//定义Dog函数，等同于定义了Dog类  
function Dog(name , age , bark)  
{  
    //将name、age、bark形参赋值给name、age、bark实例属性  
    this.name = name;  
    this.age = age;  
    this.bark = bark;  
    //使用内嵌函数为Dog实例定义方法  
    this.info = function()  
    {  
        return this.name + "的年纪为：" + this.age  
            + ",它的叫声:" + this.bark;  
    }  
}  
//创建Dog的实例  
var dog = new Dog("旺财" , 3 , '汪汪,汪汪...');  
//创建Cat函数，对应Cat类  
function Cat(name,age)  
{  
    this.name = name;  
    this.age = age;  
}  
//创建Cat实例。  
var cat = new Cat("kitty" , 2);  
//将dog实例的info方法分离出来  
var tmp = dog.info;  
//通过function的call方法完成cat的调用info方法  
alert(tmp.call(cat));
/*
与传统面向对象程序设计语言不同的是，JavaScript中的函数永远是独立的，函数永远是一等功民，函数永远不会从属于其他类，对象。即使这个还个函数是匿名内嵌函数。
JavaScript中的方法调用有两种方式：
1,正常方法    obj.method(args...)
2,方法回调    method.call(obj,args...)
*/

/*
JavaScript建对象
使用关键字new创建对象
使用Object创建即时对象
使用JSON语言创建对象
http://justsee.iteye.com/blog/799162
*/

// compatible require and umb
// https://github.com/djyde/ToProgress/blob/master/ToProgress.js
