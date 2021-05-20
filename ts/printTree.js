function printTree(list) {
    var hash = {}, tree = [], stack = [], res = [];
    // 先把list变成树的形式
    for (var i = 0; i < list.length; i++) {
        var data = list[i]; // 只是复制指针
        data.children = [];
        hash[data.id] = data;
    }
    for (var i = 0; i < list.length; i++) {
        var data = list[i];
        if (data.parentId !== 0) {
            hash[data.parentId].children.push(data);
        }
        else {
            tree.push(data);
        }
    }
    // 深度优先遍历，打印值
    stack = tree.reverse();
    while (stack.length) {
        var data = stack.pop();
        res.push({
            val: data.name,
            pre: data.pre ? (data.pre + '  ') : '  '
        });
        console.log((data.pre ? (data.pre + '  ') : '  ').substring(2) + data.name);
        for (var i = data.children.length - 1; i > -1; i--) {
            data.children[i].pre = data.pre ? (data.pre + '   ') : '   ';
            stack.push(data.children[i]);
        }
    }
}
var list = [
    { id: 1001, parentId: 0, name: 'AA' },
    { id: 1002, parentId: 1001, name: 'BB' },
    { id: 1003, parentId: 1001, name: 'CC' },
    { id: 1004, parentId: 1003, name: 'DD' },
    { id: 1005, parentId: 1003, name: 'EE' },
    { id: 1006, parentId: 1002, name: 'FF' },
    { id: 1007, parentId: 1002, name: 'GG' },
    { id: 1008, parentId: 1004, name: 'HH' },
    { id: 1009, parentId: 1005, name: 'II' },
];
printTree(list);
