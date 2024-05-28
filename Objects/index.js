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

// var lodash = require('lodash')

// var obj1 = {
//   name: 'sachin',
//   address: { road: 101 },
//   play: function () {
    
//   }
// }


// var obj2 = obj1 //normal copy
// var obj2 = JSON.parse(JSON.stringify(obj1)) //deep copy
// var obj2 = lodash.cloneDeep(obj1) //deep copy
// var obj2 =  Object.assign({}, obj1)  //shallow copy ES-5
// var obj2 =   {...obj1} //shallow copy ES-6



// console.log(obj1)
// console.log(obj2)

// obj2.name = 'kohli'
// obj2.address.road = 201

// console.log(obj1)
// console.log(obj2)


//Math object

// console.log(Math)

// console.log(Math.min(2,9,20,4))
// console.log(Math.max(2,9,20,4))
// console.log(Math.floor(10.6))
// console.log(Math.floor(10.10))
// console.log(Math.floor(10.1))
// console.log(Math.ceil(10.6))
// console.log(Math.ceil(10.10))
// console.log(Math.ceil(10.1))
// console.log(Math.round(10.5))
// console.log(Math.round(10.6))
// console.log(Math.round(10.4))
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*50))
// console.log(Math.floor(Math.random()*100))
// console.log(Math.floor(Math.random()*1000))
// console.log(Math.floor(Math.random()*10000))
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(9))
// console.log(Math.sqrt(25))


//Date object

// var now = new Date()
// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMonth())
// console.log(now.getMinutes())
// now.setFullYear(2050)
// now.setDate(30)
// now.setHours(22)
// console.log(now)

// var date1 = new Date(2040, 5, 20, 9, 20, 50) //number

// var date1 = new Date('2050 11 30 20:10:30') //string
// console.log(date1)

// console.log(date1.getFullYear())
// console.log(date1.getDate())
// console.log(date1.getHours())
// console.log(date1.getSeconds())
// console.log(date1.getMonth())

// date1.setFullYear(2047)
// date1.setMonth(7)
// console.log(date1)


//Template string (ES-6)

var name = 'sachin'
var age = 40

console.log('Hi how are you' + ' ' + name + ' ' + 'my age is' + ' ' + age) //ES-5
console.log(`Hi how are you ${name} my age is ${age}`) //ES-6








