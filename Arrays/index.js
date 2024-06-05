

// var arr = [1,2,'sachin', true, undefined , null, ()=>{}, {}, []]
// console.log(arr)

// how to access array values

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])
// console.log(arr[8])

//how to add new values to array

// var arr = [2, 3, 4]

// console.log(arr)

// //starting

// arr.unshift(1)
// console.log(arr)

// //ending

// arr.push(5)

// console.log(arr)

// //anywhere

// arr.splice(0, 0, 'staring')
// arr.splice(arr.length, 0, 'ending')
// arr.splice(3, 0, 'middle')
// console.log(arr)


//How to remove array items

// var arr = [1, 2, 3, 4, 5]

//staring

// arr.shift()
// console.log(arr)

// ending

// arr.pop()

// console.log(arr)

//anywhere

// arr.splice(0, 1)
// arr.splice(arr.length-1, 1)
// arr.splice(2, 3)
// console.log(arr)


// How to remove all items from array

// var arr1 = [1, 2, 3, 4, 5]

// var arr2 = arr1

// console.log(arr1)
// console.log(arr2)

// arr1.length = 0 //better

// arr1.splice(0, arr1.length)

// arr1 = []

// console.log(arr1)
// console.log(arr2)

//How to find array items

//primitives

// var arr = [1, 2, 3, 4, 5, 2]

// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))

//reference

var arr = [{ course: 'react' }, { course: 'nodejs' }, { course: 'css' }]; 

//these methods does not work for reference data types

// console.log(arr.indexOf({course: 'css'}))
// console.log(arr.lastIndexOf({course: 'css'}))
// console.log(arr.includes({course: 'css'}))

// var x = arr.find((obj) => {
//   // return obj.course === 'css'
//   return obj.course === 'java'
// })

// console.log(x)

// var y = arr.findIndex((obj) => {
//   return obj.course === 'css'
//   // return obj.course === 'java'
// })

// console.log(y)


//How to merge multiple arrays into one array

// var arr1 = [1, 2, 3, 4, 5]

// var arr2 = [6, 7, 8, 9, 10]

// var arr3 = [100, 200, 300,400,500]

//ES-5

// var combinedArr = arr1.concat(arr2, arr3)
// console.log(combinedArr)

//ES-6

// var combinedArr = [...arr1, ...arr2, ...arr3]
// console.log(combinedArr)


//How to copy or clone array

var originalArr = ['sachin', { road: 101 }, function play() { }]

// var copiedArr = originalArr //normal copy
// var copiedArr = Object.assign([], originalArr)  //shallow copy ES-5
// var copiedArr = [...originalArr]  //shallow copy ES-6
// var copiedArr = originalArr.slice()  //shallow copy ES-5
// var copiedArr = JSON.parse(JSON.stringify(originalArr)) //deep copy

// var lodash = require('lodash')
// var copiedArr = JSON.parse(JSON.stringify(originalArr)) //deep copy
// var copiedArr = lodash.cloneDeep(originalArr) //deep copy

// console.log(originalArr)
// console.log(copiedArr)

// copiedArr[0] = 'kohli'
// copiedArr[1].road = 201

// console.log(originalArr)
// console.log(copiedArr)

//How to loop array items

// var arr = [1,2,3,4,5]

//how to access array values without using loop

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// for of ES-6

// for (var value of arr) {
//   console.log(value)
// }

// for in

// for (var key in arr) {
//   console.log(key, arr[key])
// }

// forEach

// var x = arr.forEach((v, i) => {
//   // console.log(v, i)
//   return 100
// })

// console.log(x)


//How to convert array into string

// var arr = [1, 2, 3, 4, 5]

// console.log(arr)
// console.log(typeof arr)
// console.log(Array.isArray(arr))

// var str = arr.join()

// console.log(str)
// console.log(typeof str)

// var myArr = str.split()
// console.log(myArr)
// console.log(typeof myArr)

//Testing of array items

var arr = [1,2,3,4,5]

// some

// var some = arr.some((item) => {
//  return item>5
// })

// console.log(some)


//every

// var every = arr.every((item) => {
//   return item>0
// })
// console.log(every)


//How to filter array values based on condition

// var arr = [1, 2, 3, 4, 5]

// var filterResult = arr.filter((item) => {
//  return item > 2
// })

// console.log(filterResult)

//How to map array items with something (trasformation)

// var arr = [1, 2, 3, 4, 5]

// console.log(arr)

// var mapResult = arr.map((item) => {
//  return item*100
// })

// console.log(mapResult)

//How to reduce array items into single item

// var arr = [1, 2, 3, 4, 5]

// var reduceResult = arr.reduce((cum, cur) => {
//   console.log(cum, cur)
//   return cum * cur
// }, 2)
// console.log(reduceResult)













