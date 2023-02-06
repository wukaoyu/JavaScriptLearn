// // function deepClone(param) {
// import { def } from '../../vue-dev/src/core/util/lang';
// import new from '../../test-project/src/store/index';
//   const root = {}
// //   let nodeList = [{
// //     parent: root,
// //     key: undefined,
// //     data: param
// //   }]
// //   while (nodeList.length) {
// //     let tager = nodeList.pop()
// //     for (let key in tager.data) {
// //       nodeList.push({
// //         parent: tager,
// //         key,
// //         data: tager.data[key]
// //       })
// //     }
// //   }
// // }
// // console.log(a)
// // var a
// // // function a() {
// // //   return 1
// // // }
// // a = 2
// // a = function() {
// //   return 1
// // }
// // console.log(a)
// // for (var i = 0; i < 10; i++) {
// //   setTimeout(() => {
// //     console.log(i)
// //   })
// // }
// // var tmp = 123
// // if (true) {
// //   // TDZ开始
// //   tmp = 'abc'; // ReferenceError
// //   console.log(tmp); // ReferenceError

// //   let asd; // TDZ结束
// //   console.log(tmp); // undefined

// //   // tmp = 123;
// //   // console.log(tmp); // 123
// // }
// // {
// //   let a = 1
// //   {
// //     let a = 2
// //     console.log(a)
// //   }
// // }

// // var a = {}
// // var b = {a: 1, c: 2}
// // var c = {a: 2, b: 3}
// // var d = [1, 2, 3]
// // var e = [3, 4, 5]
// // a[b] = 1
// // a[c] = 2
// // a[d] = 3
// // a[e] = 4
// // console.log(a[b], a[c], a[d], a[e], a)
// // var foo = {n:1};
// // (function(foo){            //形参foo同实参foo一样指向同一片内存空间，这个空间里的n的值为1
// //     var foo;               //优先级低于形参，无效。
// //     console.log(foo.n);    //输出1
// //     foo.n = 3;             //形参与实参foo指向的内存空间里的n的值被改为3
// //     foo = {n:2};           //形参foo指向了新的内存空间，里面n的值为2.
// //     console.log(foo.n);    //输出新的内存空间的n的值
// // })(foo);
// // console.log(foo.n);

// // (function() {
// //   var a = b = 5;
// //   console.log(b);
// //   console.log(a);
// // })();   

// // 柯里化
// function toCurry(func, ...args) {
//   // ↑需要柯里化的函数作为参数
//   // ↑也可以有初始参数传入
//   // ↑缓存在args中
//   return function () {
//     // 合并上一次缓存的参数和本次传入的参数
//     args = [...args,...arguments];
//     // 判断参数数量是否足够
//     console.log(func.length, args)
//     if (args.length < func.length) {
//       // 如果不够，继续递归
//       // 注意，这里每一次递归都会形成新的闭包
//       // 保证柯里化函数每一步调用都是独立的，互不影响
//       return toCurry(func, ...args);
//     } else {
//       // 如果参数满足数量，执行函数并返回结果
//       return func.apply(null, args);
//     }
//   }
// }

// function toCurry(func, ...args) {
//   // 判断func是否为函数，毕竟柯里化要操作的是函数
//   if (!func instanceof Function) throw TypeError();
//   // 设置length属性为剩余参数的个数
//   // 为什么这么写
//   // 因为Function.length是不可写的writable:false
//   // 但是是可配置的，configurable:true
//   Object.defineProperty(curry,'length',{
//       get:function () {
//           return func.length - args.length
//       }
//   })
//   // 定义rest属性，用来判断是否还有剩余参数
//   curry.rest = curry.length > 0;
  
//   function curry() {
//       args = [...args, ...arguments];
// ​
//       if (args.length < func.length) {
//           return toCurry(func, ...args);
//       } else {
//           // 这里apply第一参数改成了this，您考虑一下为什么呢？
//           return func.apply(this, args);
//       }
//   }
//   return curry
// }
// function sum(a, b, c) {
//   return a + b + c
// }
// // var f = toCurry(sum)
// // console.log(f(1)(2)(3))

// // function foo(a) {
// //   var b = a * 2
// //   function bar(c) {
// //     console.log(a, b, c)
// //   }
// //   bar(b * 3)
// // }
// // foo(2)

// {
//   let a = 0
// }
// console.log(a)

// function* idMaker(){
//   let index = 0;
//   while(true)
//       yield index++;
// }

// let gen = idMaker(); // "Generator { }"

// console.log(gen.next().value); 
// // 0
// console.log(gen.next().value); 
// // 1
// console.log(gen.next().value); 
// // 2

// console.log(foo) 
// var a = true
// if (a) {
//   function foo() {
//     console.log(1)
//   }
// } else {
//   function foo() {
//     console.log(2)
//   }
// }


// var MyModules = (function Manager() {
//   var modules = {}
//   function define(name, deps, impl) {
//     for (var i = 0; i <deps.length; i++) {
//       deps[i] = modules[deps[i]]
//     }
//     modules[name] = impl.apply(impl, deps)
//   }
//   function get(name) {
//     return modules[name]
//   }
//   return {
//     define,
//     get
//   }
// })()
// MyModules.define('bar', [], function() {
//   function hello(who) {
//     return 'My name is' + who
//   }
//   return {
//     hello
//   }
// })

// var largestRectangleArea = function(heights) {
//   if (heights.length === 0) return 0
//   let area = 0
//   for (let i = 0; i < heights.length; i++) {
//       let count = 1
//       for (let j = i - 1; j >=0; j--) {
//           if (heights[j] < heights[i]) break
//           count++
//       }
//       for (let j = i + 1; j < heights.length; j++) {
//           if (heights[j] < heights[i]) break
//           count++
//       }
//       let nowArea = heights[i] * count
//       if (nowArea > area) {
//           area = nowArea
//       }
//   }
//   return area
// };
// console.log(largestRectangleArea([5,5,1,7,1,1,5,2,7,6]))

// function A() {
//   // this.do=function() {return 'foo';};
// }
// A.prototype=function() {
//   this.do=function() {return 'bar'};
// };
// var x=new A();
// console.log(x.do())


// function Foo() {
//   var i = 0;
//   return function() {
//       console.log(i++);
//   }
// }

// var f1 = Foo(),
//   f2 = Foo();
// f1();
// f1();
// f2();

// var obj = {
//   id: 'awesome'
// }
// var arr = [1,2,3]
// function foo(el) {
//   console.log(el, this.id)
// }
// arr.forEach(foo, obj) // 1 awesome 2 awesome 3 awesome


// (async () => {
//   console.log('hello')
//   await sleep(2000) // 等待两秒
//   console.log('world')
// })()

// function sleep(time) {
//   return new Promise(resolve => {
//     setTimeout(resolve, time)
//   })
// }

// // 节流
// function throttle(fn, time) {
//   var pre = 0
//   return function() {
//     var now = new Date()
//     var _this = this
//     var arg = arguments
//     if (now - pre > time) {
//       fn.apply(_this, arg)
//     }
//   }
// }
// // 防抖
// function debounce(fn, time) {
//   var timeout
//   return function() {
//     var _this = this
//     var arg = arguments
//     if (timeout) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(() => {
//       fn.apply(_this, arg)
//     }, time)
//   }
// }
// let test = {
//   name:'test'
// }
// let o = {
//   fn:function(){
//       console.log(this.name);
//   }
// }
// Function.prototype.myCall = function(obj){
  
//   //我们要让传入的obj成为, 函数调用时的this值.
//   obj._fn_ = this;  //在obj上添加_fn_属性，值是this(要调用此方法的那个函数对象)。
//   obj._fn_();       //在obj上调用函数,那函数的this值就是obj.
//   delete obj._fn_; // 再删除obj的_fn_属性,去除影响.
//   //_fn_ 只是个属性名 你可以随意起名，但是要注意可能会覆盖obj上本来就有的属性
// }
// o.fn() //  Object {fn: function}  
// o.fn().myCall(test)
// let deepObject = {
//   a: 1,
//   b: {
//       a:2,
//       b:3
//   },
//   c: function() {return 4},
//   e: [1,2,3, {
//     a: 1,
//     b: 2
//   }]
// }
// // // 这种深拷贝方法好一些
// function goodDeepClone(param) {
//   const root = {};
//   const loopList = [
//       {
//           parent: root,
//           key: undefined,
//           data: param,
//       }
//   ];
//   while (loopList.length) {
//       // console.log(root)
//       const node = loopList.pop();
//       const parent = node.parent;
//       const key = node.key;
//       const data = node.data;
//       let res = parent;
//       if (typeof key !== 'undefined') {
//           res = parent[key] = (data instanceof Array ? [] : {});
//       }
//       // console.log(res, parent)
//       for(let k in data) {
//           if (data.hasOwnProperty(k)) {
//               if (typeof data[k] === 'object') {
//                   // 下一次循环
//                   loopList.push({
//                       parent: res,
//                       key: k,
//                       data: data[k]
//                   });
//               } else {
//                   res[k] = data[k];
//                   // console.log(res)
//               }
//           }
//           // console.log(k, root, res, key)
//       }
//       console.log('-----------')
//   }
//   return root
// }



// function deepCloneTest(param) {
//   const root = {}
//   const rootList = [{
//     parent: root,
//     key: undefined,
//     data: param
//   }]
//   while(rootList.length) {
//     const node = rootList.shift()
//     const parent = node.parent
//     const key = node.key
//     const data = node.data
//     let res = parent
//     if (typeof key !== 'undefined') {
//       res = parent[key] = (data instanceof Array ? [] : {})
//     }
//     for (let k in data) {
//       if (typeof data[k] === 'object') {
//         rootList.push({
//           parent: res,
//           key: k,
//           data: data[k]
//         })
//       } else {
//         res[k] = data[k]
//       }
//       console.log(k, root, res, key)
//     }
//     console.log('-----------')
//   }
//   return root
// }


// let newObj = deepCloneTest(deepObject)
// console.log(newObj)

// console.log(compareVersion([2, 1, 2], [2, 0, 13]))
// function compareVersion(ver1, ver2) {
//   if (ver2.join('') === ver1.join('')) return 2
//   for (let i = 0; i < ver1.length; i++) {
//       let ver1Num = ver1[i] || 0
//       let ver2Num = ver2[i] || 0
//       console.log(ver1Num, ver2Num)
//       if (ver1Num > ver2Num) {
//           return 0
//       }
//       if (ver1Num < ver2Num) {
//         return 1
//       }
//   }
// }

// let a = 'foo'
// let b = Array.prototype.join.call(a, '-')
// let c = 42



Function.prototype.softBind = function(obj) {
  var fn = this
  var curried = [].slice.call(arguments, 1)
  var bound = function() {
    return fn.apply(
      (!this || this === (global)) ? obj : this, curried.concat.apply(curried, arguments)
    )
  }
  bound.prototype = Object.create(fn.prototype)
  return bound
}

function foo() {
  console.log('name:' + this.name)
}
var obj = {name: 'obj'}
var obj2 = {name: 'obj2'}
var obj3 = {name: 'obj3'}

var fooOBJ = foo.softBind(obj)
fooOBJ()
obj2.foo = foo.softBind(obj)
obj2.foo()
fooOBJ.call(obj3)

setTimeout(obj2.foo, 10)
function foo() {
  return a => {
    console.log(this.a)
  }
}

var obj1 = {
  a: 1
}

var obj2 = {
  a: 2
}

var bar = foo.call(obj1)
bar.call(obj2)

let str = 'I am a string'
console.log(typeof str) // 'string'
console.log(str instanceof String) // false

let strObject = new String('I am a String')
console.log(typeof strObject) // 'string'
console.log(strObject instanceof String) // false

function foo() {
  console.log(this.a)
}

let obj = {
  a: 2
}
console.log(Object.getOwnPropertyDescriptor(obj, 'a'))
foo.call(obj)

let arr = ['foo', 42, 'bar']
arr['4'] = '123'
console.log(arr.length)


