/**
 * 自定义call方法
 * @param {*} context 绑定的对象
 * @param  {...any} args 参数
 */
Function.prototype.myCall = function(context, ...args) {
  context = (typeof context === 'object' ? context : window)
  const key = Symbol()
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}

/**
 * 自定义apply方法
 * @param {*} context 绑定的对象
 * @param {*} args 数组形式传入的参数
 */
Function.prototype.myApply = function(context, args) {
  context = (typeof context === 'object' ? context : window)
  const key = Symbol()
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}

function test(num1, num2) {
  console.log(this.a, num1 + num2)
}
let obj = {
  a: 'hhh'
}
test.myCall(obj, 1, 2)