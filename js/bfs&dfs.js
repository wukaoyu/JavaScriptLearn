// 广度优先（二叉树）
function bfs(node) {
  let q = [], step = 0
  q.push(node)
  while (q.length) {
    const size = q.length
    for (let i = 0; i < size; i++) {
      const cur = q.shift()
      console.log(cur)
      if (cur.left != null) {
        q.push(cur.left)
      }
      if (cur.right != null) {
        q.push(cur.right)
      }
    }
    step++
  }
}
// 深度优先（二叉树）
function dfs(node) {
  let list = []
  help(node, [])
  function help(root, temp) {
    if (root.left == null && root.right == null) {// 这一步可以换成其他条件
      const pushTemp = temp.slice()
      pushTemp.push(root.val)
      list.push(pushTemp)
      return
    }
    temp.push(root.val)
    if (root.left) {
      help(root.left, temp)
    }
    if (root.right) {
      help(root.right, temp)
    }
    temp.pop()
  }
}
const a = {
  val: 1,
  left:{
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  },
  right:{
    val: 3,
    left: {
      val: 6
    },
    right: {
      val: 7
    }
  }
}
dfs(a)
bfs(a)

// a = {
//   val: 1,
//   left: {
//     val: 2,
//     left: { val: 4, left: null, right: null, next: null },
//     right: null,
//     next: { val: 0, left: null, right: null, next: null }
//   },
//   right: { val: 0, left: null, right: null, next: null },
//   next: null
// }



// b = {
//   val: 1,
//   left: {
//     val: 2,
//     left: { val: 4, left: null, right: null, next: null },
//     right: null,
//     next: 0
//   },
//   right: { val: 0, left: null, right: null, next: null },
//   next: null
// }


// function TreeNode(val){
//   this.val = val;
//   this.left = null;
//   this.right = null;
// }

// function sortedArrayToBST (arr) {
// 	let root = new TreeNode(arr[0]), temp = [root], idx = 0
//   while(idx < arr.length) {
//     const size = temp.length
//     for (let i = 0; i < size; i++) {
//       const node = temp.shift()
//       node.left = arr[++idx] ? new TreeNode(arr[idx]) : null
//       node.right = arr[++idx] ? new TreeNode(arr[idx]) : null
//       temp.push(node.left)
//       temp.push(node.right)
//     }
//   }
// 	return root
// }
// console.log(sortedArrayToBST([1,2,3,4,5,6,7,null,8,null,null,9,10]))
