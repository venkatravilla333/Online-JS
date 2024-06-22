

var iterableds = [1, 2, 3, 4, 5]

//without using loop

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// with for of loop

var iteratorObj = iterableds[Symbol.iterator]()
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())

for (var value of iterableds) {
  console.log(value)
}

var obj = {
  name: 'sachin',
  age: 40,
  color: 'red'
}

console.log(obj)
// without using loop

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.color)

// for (var value of obj) {
//   console.log(value)
// }

// var str = new String('hello how are you')

// console.log(str)

// var myMap = new Map()

// console.log(myMap)

// var mySet = new Set()

// console.log(mySet)

// function test() {
//   console.log(arguments)
// }
// test()

// function* genFun() {
  
// }
// console.log(genFun())


var obj = {
  fistName: 'kohli',
  lastname: 'virat',
  address: 'delhi',
  color: 'red'
}

obj[Symbol.iterator] = function () {
  var properties = Object.keys(obj)

  var count = 0

  var next = function () {
    if (count >= properties.length) {
      return {done: true, value: undefined}
    } else {
      return {done: false, value: obj[properties[count++]]}
    }
  }

  return {next} //iteartor obj
  
}

// var iteratorObj = obj[Symbol.iterator]()
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())

// console.log(obj)

for (var value of obj) {
  console.log(value)
}




// for (var value of obj) {
//   console.log(value)
// }