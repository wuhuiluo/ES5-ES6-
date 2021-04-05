// 1.indexOf

// let list = [1, 2, 3]

// console.log(list.indexOf(2)); // 1
// console.log(list.indexOf('whl')); // -1

// 2.map

// let list = [1, 2, 3]

// const res = list.map((value, index, self) => {
//     console.log(value);
//     console.log(index);
//     console.log(self);
//     return value * 2
// })

// console.log(list, res);

// 3.forEach
// let list = [1, 2, 3]
// const res = list.forEach((value, index, self) => {
//     console.log(value); // 1 2 3
//     console.log(index); // 0 1 2
//     console.log(self); // [1,2,3]
//     return value * 2
// })

// console.log(list, res); // list: [1,2,3] res: undefined

// 4.splice

// let list = [1, 2, 3]
// // list.splice(0, 1) // 把第0个位置，给删除一位 [2,3]

// // list.splice(0,1,'whl')
// // console.log(list);

// list.splice(0,0,'whl')
// console.log(list);

// 5.slice

// let list = [1,2,3]
// let res = list.slice(0,3)
// console.log(res);


// 6.filter

// let list = [1,2,3]

// let res = list.filter(item => item > 1)
// console.log(res);


// 7.every

// let list = [1, 2, 3]

// let res = list.every(item => item > 0)
// console.log(res);

// // 8.some
// let list = [1, 2, 3];

// let res = list.some(item => item > 0)
// console.log(res) // true

// 9.reduce

// let list = [1, 2, 3]

// let res = list.reduce((prev, cur) => prev += cur, 0)
// console.log(res);

// 10.reverse

// let list = [1,2,3]

// let res = list.reverse()
// console.log(res);

// 11.join

// let list = [1, 2, 3]

// // let res = list.join('-')

// // console.log(res);

// let sum = eval(list.join('+'))
// console.log(sum);


// 12.sort

// let list = [1, 2, 3]

// let sort = list.sort((a, b) => a - b)

// console.log(sort);

// 13.concat

// let list = [1, 2, 3]

// let res = list.concat([1, 2, 3])
// console.log(res);

// 14.push

// let list = [1,2,3]

// let res = list.push(1)

// console.log(res);

// 15.pop

// let list = [1,2,3]

// const res = list.pop()
// console.log(res);

// 16.shift

// let list = [1,2,3]
// const res = list.shift()
// console.log(res);

// 17.unshift

// let list = [1, 2, 3]

// let res = list.unshift(1)

// console.log(res,list);

// 18.toString

// let list = [1,2,3]
// let res = list.toString()
// console.log(res);

// 19.Array.isArray

// let list = [1,2,3]

// let res = Array.isArray(list)
// console.log(res);

// 20.includes

// let list = [1,2,3]

// let res = list.includes('whl')
// let res1 = list.includes(1)
// console.log(res,res1);

// 21.find

// let list = [1,2,3]

// let res = list.find(item => item > 1)
// console.log(res);

// 22.findIndex

// let list = [1, 2, 3]
// let res = list.findIndex(item => item > 1)
// console.log(res); // 1

// 23.flat

// let list = [1, 2, 3, [4, [5]]];

// let res = list.flat(Infinity)
// console.log(res) // [1, 2, 3, 4, 5]

// 24.fill

// let list = [1, 2, 3];

// let res = list.fill(1)
// console.log(res) // [1, 1, 1]

// 25.Array.from 

// let res = Array.from(document.getElementsByTagName("div"))
// console.log(res) // 转换为真数组就可以调用数组原型的方法


// 26.Array.of

let res = Array.of(1, 2, 3)
console.log(res) // [1, 2, 3]