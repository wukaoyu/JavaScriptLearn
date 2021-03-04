function pro(flag) {
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve('promise正常返回')
    }else {
      reject('promise异常返回')
    }
  })
}
function a() {
  return pro(true)
}

function b()