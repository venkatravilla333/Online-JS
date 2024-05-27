//How to create object

//Object literal way

// var obj1 = {
//   name: 'sachin',
//   age: 40,
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(obj1)


// var obj2 = {
//   name: 'kohli',
//   age: 30,
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(obj2)


//functory function way (ES-5)

// function factory(name, age) {
//   return {
//     // name: name,
//     // age: age,
//     name,
//     age,
//     // play: function () {
//     //   console.log('play')
//     // }
//     play() {
//       console.log('play')
//     }
//   }
// }

// var obj1 = factory('sachin', 40)
// var obj2 = factory('kohli', 30)
// console.log(obj1)
// console.log(obj2)


//contructor function way (ES-5)

// function Test(name, age) {
//   this.name = name;
//   this.age = age;
//   this.play = function () {
//     console.log('play')
//   }
// }

// var obj1 = new Test('sachin', 40)
// var obj2 = new Test('kohli', 30)
// console.log(obj1)
// console.log(obj2)


//classical way (ES-6)

// class test {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.play = function () {
//       console.log('play')
//     }
//   }
// }

// var obj1 = new test('sachin', 40)
// var obj2 = new test('kohli', 30)
// var obj3 = new test('dhoni', 35)
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


//Objects are dynamic

// var obj = {
//   name: 'sachin',
//   play() {
//     console.log('play')
//   }
// }

// console.log(obj)

//how to access object properties

// console.log(obj.name)
// obj.play()
// console.log(obj['name'])

//how to add new properties

// obj.age = 40
// obj.go = () => {
//   console.log('go')
// }
// console.log(obj)

//how to update obj properties

// obj.age = 80
// obj.name = 'dhoni'

// console.log(obj)

//how to delete properties from object

// delete obj.name

// delete obj.age

// delete obj.play

// console.log(obj)

//How to iterate objects

// var obj = {
//   name: 'sachin',
//   age: 40,
//   address: 'mumbai'
// }

// console.log(obj)

//without loop

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.address)

//with using loop

// for (var key in obj) {
//   console.log(key, obj[key])
// }

// var keys = Object.keys(obj)

// var values = Object.values(obj)

// var entries = Object.entries(obj)

// console.log(keys)
// console.log(values)
// console.log(entries)

//copy (clone)

// primitives

// var x = 10

// var y = x
// console.log(x)
// console.log(y)

// y = 20

// console.log(x)
// console.log(y)

//Object
// import lodash from 'lodash'

var lodash = require('lodash')

var obj1 = {
  name: 'sachin',
  address: { road: 101 },
  play: function () {
    
  }
}


// var obj2 = obj1 //normal copy
// var obj2 = JSON.parse(JSON.stringify(obj1)) //deep copy
// var obj2 = lodash.cloneDeep(obj1) //deep copy
// var obj2 =  Object.assign({}, obj1)  //shallow copy ES-5
var obj2 =   {...obj1} //shallow copy ES-6



// console.log(obj1)
// console.log(obj2)

obj2.name = 'kohli'
obj2.address.road = 201

console.log(obj1)
console.log(obj2)







