// console.log(unescape(escape("?!=()#%&")))

// Function.prototype.myBind = function (context) {
//     if (typeof this !== 'function') {
//       throw new TypeError('Error')
//     }
//     var _this = this
//     console.log(context)
//     var args = [...arguments].slice(1)
//     // 返回一个函数
//     return function F() {
//       // 因为返回了一个函数，我们可以 new F()，所以需要判断
//       if (this instanceof F) {
//         return new _this(...args, ...arguments)
//       }
//       return _this.apply(context, args.concat(...arguments))
//     }
// }
// let a = {
//     value: 1
// }
// function getValue(name, age) {
//     console.log(name)
//     console.log(age)
//     console.log(this.value)
// }
// let a = [1,1,1,3,5,6,2,23.2,23.3,2,2,1,4,4,5,4,565,2,32,43,2]
// Array.prototype.quchong = function() {
//     let res = []
//     let newJson = {}
//     for (let i = 0; i < this.length; i++) {
//         if (!newJson[this[i]]) {
//             res.push(this[i])
//             newJson[this[i]] = 1
//         }
//     }
//     return res
// }
// // 深拷贝
// // 第一个深拷贝问题太多了，数组里放入json无法深拷贝，而且有可能无限循环，爆栈
// function deepClone(param) {
//     if (param === null) return param
//     let targer = Array.isArray(param) ? [] : {}
//     for (let key in param) {
//         if (Array.isArray(param)) {
//             targer[key] = param[key]
//         }else {
//             targer[key] = deepClone(param[key])
//         }
//     }
//     return targer
// }
// let deepObject = {
//     a: 1,
//     b: {
//         a:2,
//         b:3
//     },
//     c: function() {return 4},
//     e: [1,2,3, {
//         a: 1,
//         b: 2,
//         c: 3
//     }]
// }
// // 这种深拷贝方法好一些
// function goodDeepClone(param) {
//     const root = {};
//     const loopList = [
//         {
//             parent: root,
//             key: undefined,
//             data: param,
//         }
//     ];
//     while (loopList.length) {
//         const node = loopList.pop();
//         const parent = node.parent;
//         const key = node.key;
//         const data = node.data;
//         let res = parent;
//         if (typeof key !== 'undefined') {
//             res = parent[key] = {};
//         }
//         for(let k in data) {
//             if (data.hasOwnProperty(k)) {
//                 if (typeof data[k] === 'object') {
//                     // 下一次循环
//                     loopList.push({
//                         parent: res,
//                         key: k,
//                         data: data[k],
//                     });
//                 } else {
//                     res[k] = data[k];
//                 }
//             }
//         }
//     }
// }
// let newObj = goodDeepClone(deepObject)
// console.log(newObj, deepObject)
// console.log(a.quchong())
// console.log(getValue.myBind(a, 'yck', '24'))

// function getIntersectionNode(headA, headB) {
//     let pA = headA, pB = headB
//     while(pA || pB) {
//         if (pA === pB) return pA
//         pA = pA === null ? headB : pA.next
//         pB = pB === null ? headA : pB.next
//     }
//     return null
// }

// var addTwoNumbers = function(l1, l2) {
//     function NodeList(val) { this.val = val; this.next = null; }
//     let pA = l1, pB = l2
//     let node = new NodeList('head')
//     let temp = node
//     let add = 0, sum = 0
//     while(pA || pB) {
//         sum = (pA ? pA.val : 0) + (pB ? pB.val : 0) + add
//         if (sum >= 10) {
//             sum = sum % 10
//             add = 1
//         }else {
//             add = 0
//         }
//         pA && (pA = pA.next)
//         pB && (pB = pB.next)
//         temp.next = new NodeList(sum)
//         temp = temp.next;
//     }
//     if (add) {
//         temp.next = new NodeList(add)
//     }
//     return node.next
// };

// var subarraySum = function(nums, k) {
//     let obj = {0: 1}                     // 以防一开始就碰到以k开头的nums
//     let sum = 0
//     let res = 0
//     for(let item of nums) {
//         sum += item                        // 从0 到当前 的和
//         res += obj[sum - k] || 0           // 如果前面出现过 sum - k 的 sum时, res加上该项的值
//         obj[sum] = (obj[sum] || 0) + 1     // 把当前sum 加入obj, 如果存在就加1
//         console.log(sum - k, obj[sum - k])
//     }
//     console.log(obj)
//     return res
// };
// console.log(subarraySum([1,6,2,6,5,6,6,3,2,6,7,0,1,2], 4))
// var searchInsert = function(nums, target) {
//     let place = 0, breakNum = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (target === nums[i]) {
//             place = i
//             break
//         }
//         if (target < nums[i]) {
//             breakNum = i 
//             break
//         }
//     }
//     if (breakNum) {
//         nums.splice(breakNum, 0, "three")
//     }
//     return place
// };
// console.log(searchInsert([1,3,5,6], 5))

// var name = "The Window";
// var object = {
//     name : "My Object",
//     getNameFunc : function(){
//         return function(){
//             return this.name;
//         };
//     }
// };
// console.log(object.getNameFunc()());
// Function.prototype.myCall = function (context, ...arg) {
//     if(typeof context !=='object' && typeof context !=='function' && context !==null ){ 
//         arg.unshift(context) 
//         context = window; 
//     }
//     var n = Symbol();
//     context[n] = this;
//     var res = context[n](...arg);
//     delete context[n];
//     console.log(3, arg)
//     return res;
// }
// function f2(a, b) {
//     console.log(this);
//     console.log(a + b);
// }
// var obj = {
//     q: 123,
//     w: 456,
//     e: 789
// }
// f2.myCall([1,2], 3, 3);

// let a = b = 2
// console.log(a)

// /**
//  * @param {number} numCourses
//  * @param {number[][]} prerequisites
//  * @return {boolean}
//  */
// var canFinish = function(numCourses, prerequisites) {
//     let duJson = {}
//     for (let i = 0; i < prerequisites.length; i++) {
//         if (!duJson[prerequisites[i][0]]) {
//             duJson[prerequisites[i][0]] = [prerequisites[i][1]]
//         }else {
//             duJson[prerequisites[i][0]].push(prerequisites[i][1]) 
//         }
//         if (!duJson[prerequisites[i][1]]) {
//             duJson[prerequisites[i][1]] = []
//         }
//     }
//     let canChoose = [], count = 0
//     for (let key in duJson) {
//         if (duJson[key].length === 0) {
//             canChoose.push(key)
//             delete duJson[key]
//         }
//     }
//     while(canChoose.length) {
//         count++
//         let nowClass = canChoose.shift()
//          for (let key in duJson) {
//             let index = duJson[key].indexOf(nowClass)
//             if (index > -1) {
//                 duJson[key].splice(index, 1)
//             }
//             console.log(typeof duJson[key][0], typeof nowClass, nowClass === duJson[key][0])
//             if (duJson[key].length === 0) {
//                 canChoose.push(key)
//             }
//         }
//     }
//     if (count < numCourses) {
//         return false
//     }
//     return true
// };
// canFinish(2, [[1, 0]])

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => {
//     console.log(accumulator, currentValue)
//     return accumulator + currentValue
// }

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let myMap = new Map(), arr = nums.slice(), myLength = 1, myIndex = 0, res = []
    for (let i = 1; i < nums.length + 1; i++) {
        myLength *= i
    }
    console.log(myLength)
    for (let i = 0; i < myLength; i++) {
        if (arr[myIndex + 1] !== undefined) {
            [arr[myIndex], arr[myIndex + 1]] = [arr[myIndex + 1], arr[myIndex]]
        }
        myMap.set(arr.toString(), '')
        myIndex++
        if (myIndex >= nums.length - 1) myIndex = 0
    }
    for (let key of myMap.keys()) {
        res.push(key.split(','))
    }
    return res
};
permuteUnique([1,2,3,4,5])

