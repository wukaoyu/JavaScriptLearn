// Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
let testJson = {
  a: 1,
  b: 2
}
var proxy = new Proxy (testJson, {
  get: (target, propKey, receiver) => {
    return target[propKey]
  },
  set: (obj, prop, value, receiver) => {
    obj[prop] = value
    return true
  }
})

function myFun (a, b) {
  return '代理函数原函数'
}
const a = {
  a: 1
}
var funProxy =  new Proxy(myFun,  {
  apply: function (target, ctx, args) {
    console.log(target, ctx.a, args)
    return  'I am the proxy';
  }
})
console.log(funProxy.call(a, 1, 2))