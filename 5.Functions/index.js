// var a = 10

// var test = () => {
//   var b = 100
// }
// test()

//Function definition

//function declaration syntax

// function test() {
  
// }

// test()

//function expression

// 1) named fun exp

// var x = function test() {

// };
// x()

// 2) anonymous fun exp

// var y = function () {

// };

// y()

// 3) arrow fun exp

// var z = () => {
  
// };

// z()

//params vs arguments

// var test = (a,b) => {
//   console.log(a)
//   console.log(b)
// }
// test(10,20)

// default params (ES-6)

// var test = (a=10, b=20) => {
//   console.log(a)
//   console.log(b)
// }

// test()


//varying on of params vs arguments


//arguments object (ES-5)

// function test() {
//   console.log(arguments)
  // console.log(arguments[0])
  // console.log(arguments[1])
  // console.log(arguments[2])
  // console.log(arguments[3])
  // console.log(arguments[4])
  // console.log(typeof arguments)
  // console.log(Array.isArray(arguments))
//   var sum = 0
//   for (var value of arguments) {
//     console.log(value)
//     sum += value
//   }
//   return sum
// }

// console.log(test(1,2,3,4,5))


//Rest parameter (ES-6)

// var test = (...rest) => {
  // console.log(arguments)
//   console.log(rest)
  // console.log(rest[0])
  // console.log(rest[1])
  // console.log(rest[2])
  // console.log(rest[3])
  // console.log(rest[4])
  // var sum = 0
  // for (var value of rest) {
  //   console.log(value)
  //   sum +=value
  // }

//   return rest.reduce((cum, cur) => {
//     console.log(cum, cur)
//     return cum+cur
//   }, 0)

  // return sum
// }
// console.log(test(1,2,3,4,5))


//Scope


// Global scope

// storage in global

// var a = 1

// let b = 2

// const c = 3

// //access in global scope

// console.log(a)
// console.log(b)
// console.log(c)

// function test() {

//   //storage in functional scope
//   var d = 4
//   let e = 5
//   const f = 6

//   //access in functional scope
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)

//   if (true) {

//     //storage in block scope
//     var g = 7
//     let h = 8
//     const i = 9
//     //access in block scope

//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)
//     console.log(g)
//     console.log(h)
//     console.log(i)
//   }

//   console.log(g)
//   // console.log(h)
//   // console.log(i)
// }


// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)

// test()


//Hoisting

// console.log(a)

// var a = 'sachin'
// let a = 'sachin'

// console.log(a)

// // console.log(b)
// // var b = 40
// const b = 40
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)

// console.log(d)
// var d
// console.log(d)

// console.log(e)
// var e = null
// console.log(e)

// console.log(f)
// var f = { name: 'kohli' }
// console.log(f)


// console.log(g)
// var g = [1, 2, 3]
// console.log(g)


// // h()
// // console.log(h)
// // h()
// let h = function test() {
//   console.log('Named fun exp')
// }
// console.log(h)
// h()

// console.log(i)
// var i = function () {
//   console.log('Anonymous fun exp')
// }
// console.log(i)


// console.log(j)

// var j = () => {
//   console.log('Arrow fun exps')
// }
// console.log(j)
// //function dec syntax

// console.log(declare)
// declare()
// function declare() {
//   console.log('fun declaration')
// }
// console.log(declare)
// declare()



// console.log(x)
// var x = 10
// console.log(x)
// function test() {
//   console.log(z)
//   z = 200
//   console.log(z)
//   console.log(x)
//   var x = 100
// }

// test()


// var vs let vs const

// re-declaration

// var x = 10
// let x = 10

// console.log(x)

// var x = 100
// let x = 100
// const x = 100

// console.log(x)

//re-assignment

// var x = 10
// let x = 10
// const x = 10
// console.log(x)
// x = 100
// console.log(x)

//initialization

// var x
// let x
// const x

// console.log(x)
// x = 10
// console.log(x)

//closure

// function outer() {
//   var x = 100
//   // return x

//   function inner() {
//     var y = 200
//     console.log(x)
//   }
//   return inner
// }

// // console.log(outer)
// var inner = outer()
// inner()


//This key word


// console.log(this)

// function test() {
//   console.log(this)
// }
// test()

// var test1 = ()=> {
//   console.log(this)
// }
// test1()

// var obj = {
//   name: 'sachin',
//   play1: function () {
//     console.log(this)
//     inner1 = ()=> {
//       console.log(this)
//     }
//     inner1()
//   },
//   play2: ()=> {
//     console.log(this)
//    function inner2 () {
//       console.log(this)
//     }
//     inner2()
//   }
// }

// obj.play1()
// obj.play2()

// function Mytest() {
//   console.log(this)
//   this.name = 'sachin';
//   this.play1 = function () {
//     console.log(this)
//     inner1 = () => {
//       console.log(this)
//     }
//     inner1()
//   }
//   this.play2 = ()=> {
//     console.log(this)
//     inner2 = ()=> {
//       console.log(this)
//     }
//     inner2()
//   }
    
// }
// var obj = new Mytest()
// obj.play1()
// obj.play2()


// class Myclass{
//   constructor() {
//     console.log(this)
//     this.name = 'sachin';
//     this.play1 = function () {
//       console.log(this)
//       function inner1() {
//         console.log(this)
//       }
//       inner1()
//      var inner2 = ()=> {
//         console.log(this)
//       }
//       inner2()
//     };
//     this.play2 = ()=> {
//       console.log(this)
//       function inner3() {
//         console.log(this)
//       }
//       inner3()
//     var inner4 =() => {
//         console.log(this)
//       }
//       inner4()
//     }
//  }
// }

// // console.log(typeof Myclass)
// new Myclass().play1()
// new Myclass().play2()

//Changing of this keyword reference

// var obj = {
//   name: 'sachin',
//   age: 40,
//   play: function () {
    
//   }
// }
// var test = ()=> {
//   console.log(this)
// }

// test()
// test.call(obj)
// test.apply(obj)
// test.bind(obj)()

// var obj = {
//   name: 'sachin',
//   age: 40,
//   play: function(){
//   function inner(a,b,c) {
//     console.log(this)
//     console.log(a,b,c)
//     }
//     inner(1,2,3)
//     inner.call(obj, 1,2,3)
//     inner.apply(obj, [1,2,3])
//     inner.bind(obj, 1,2,3)()
//   }
// }

// obj.play()
// var inner = obj.play()
// inner(1,2,3)
// inner.call(obj, 1,2,3)
// inner.apply(obj, [1,2,3])
// inner.bind(obj, 1,2,3)()

// function Mytest() {
//   console.log(this)
//   this.name = 'sachin';
//   this.age = 40;
//   this.play = function () {
//     console.log(this)
//     var inner1 = (a,b,c)=> {
//       console.log(this)
//       console.log(a,b,c)
//     }
//     inner1(1,2,3)
//     // inner1.call(this, 1,2,3)
//     // inner1.apply(this, [1,2,3])
//     // inner1.bind(this, 1, 2, 3)()
    
//   }
// }
// new Mytest().play()

class Myclass{
  constructor() {
    console.log(this)
    this.name = 'sachin';
    this.age = 40;
    this.play = function () {
      console.log(this)
      // function inner(a,b,c) {
      //   console.log(this)
      //   console.log(a,b,c)
      // }
      var inner = (a,b,c)=> {
        console.log(this)
        console.log(a,b,c)
      }
      inner(1,2,3)
      // inner.call(this,1,2,3)
      // inner.apply(this, [1,2,3])
      // inner.bind(this, 1,2,3)()
    }
  }
}

new Myclass().play()







