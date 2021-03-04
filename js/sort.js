let arr = [-1, 2, 6, 7, 3, 1, 5, 7, 2, 4, 9, 6, -3]
// 冒泡排序
function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let a
                a = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = a
            }
        }
    }
    return arr
}
// 快速度排
function sort1(arr) {  
    if(arr.length <= 1){
        return arr
    }
    var mid = parseInt(arr.length / 2)
    var left = [],right = []
    var pivot = arr.splice(mid,1)[0]
    arr.forEach(item => {
        if(item < pivot){
            left.push(item)
        }else {
            right.push(item)
        }
    })
    return sort1(left).concat([pivot], sort1(right))
}
// 计数排序
function sort2(arr) {
  const max = Math.max.apply(null, arr)
  const min = Math.min.apply(null, arr)
  let temp = {}, res = []
  for (let i = min; i < max; i++) {
    temp[i] = 0
  }
  for (let i = 0; i < arr.length; i++) {
    temp[arr[i]]++
  }
  for (let i = min; i < max; i++) {
    while(temp[i]--) {
      res.push(i)
    }
  }
  return res
}
console.log(sort2(arr))