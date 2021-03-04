/**
 * 发布订阅模式工具类
 */
class event {
  constructor() {}
  handlers = {}
  addEvent(type, ...params) {
    if (!(type in this.handlers)) {
      this.handlers[type] = []
    }
    this.handlers[type].push(...params)
  }
  
  removeEvent(type, handler) {
    if (!(type in this.handlers)) {
      return new Error('无效事件')
    }
    if (!handler) {
      delete this.handlers[type]
    }else {
      const idx = this.handlers[type].findIndex(ele => {
        return ele === handler
      })
      if (idx === -1) {
        return new Error('没有该事件')
      }
      this.handlers[type].splice(idx, 1)
      if (this.handlers[type].length === 0) {
        delete this.handlers[type]
      }
    }
  }

  dispatchEvent(type, ...params) {
    if (!(type in this.handlers)) {
      return new Error('没有该事件')
    }
    this.handlers[type].forEach(handler => {
      handler(...params)
    });
  }
}

let newEvent = new event()

function load1(params) {
  this.a = 1
  console.log('load1' + params)
  let a = () => {
    this.a = 2
  }
  let b = function() {
    this.a = 2
  }
  // let newA = new a()
  let newB = new b()
  // console.log(newB.a, this.a)
}
// load1()
// let load = new load1()
// console.log(load.a)
function load2(params) {
  console.log('load2' + params)
}
newEvent.addEvent('load', load1)
newEvent.addEvent('load', load2)
// newEvent.removeEvent('load', load2)

newEvent.dispatchEvent('load', '事件呀呀呀')
