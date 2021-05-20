let obj = {
  a: 2
}
let myObj = Object.create(obj)
// myObj.a = 2
// console.log(Object.getOwnPropertyDescriptor(obj, 'a')) 
Object.defineProperty(obj, 'a', {
  writable: false,
  enumerable: true,
})
myObj.a = 5
console.log(myObj.a)
// for (let key in myObj) {
//   console.log(key)
// }

function Foo() {

}
let newFoo = new Foo()
console.log(Foo, newFoo)

var a = []
a.map(item => {
  item = 2
})
console.log(a)

let Foo = {
  init: function(who) {
    this.me = who
  },
  indentify: function() {
    return 'I am ' + this.me
  }
}
let Bar = Object.create(Foo)
Bar.speak = function() {
  console.log('Hello, ' + this.indentify() + '.')
}

let b1 = Object.create(Bar)
b1.init('bar1')
let b2 = Object.create(Bar)
b2.init('bar2')

b1.speak()
b2.speak()