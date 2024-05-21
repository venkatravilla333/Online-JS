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

var a = 1

let b = 2

const c = 3

//access in global scope

console.log(a)
console.log(b)
console.log(c)

function test() {

  //storage in functional scope
  var d = 4
  let e = 5
  const f = 6 

  //access in functional scope
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
  console.log(e)
  console.log(f)

  if (true) {

    //storage in block scope
    var g = 7
    let h = 8
    const i = 9
    //access in block scope

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)
    console.log(g)
    console.log(h)
    console.log(i)
  }

  console.log(g)
  // console.log(h)
  // console.log(i)
}


// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)

test()
