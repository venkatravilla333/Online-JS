

//IIFE

// (function iife() {
//   var a = 100
  
//   var test = ()=>{}
  
//  var test2 = function() {
//     var x = 'sachin'
//     console.log('declare')
//   }
// })()

// // console.log(a)

//first class function and callback func and heigher order fun

// var x = function heigherOrderFun(cb) {
//   return function inner(){}
// }

// x(function test(){})

//pure vs impure

// function pure(a,b,c) {
//   var sum = a + b + c
//   return sum
// }
// console.log(pure(1,2,3))

// function impure(a, b, c) {
//   var d = Math.random()*10
//   var sum = a + b + c + d
//   return sum
// }
// console.log(impure(1,2,3))

//function recurssion

// function factorial(num) {
//   if (num <= 0) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// let result = factorial(5);
// console.log(result);

//function currying

// without curry

// function test(a,b,c) {
//   console.log(a+b+c)
// }
// test(1, 2, 3)

// with curry
// function fun1(a) {
//   return function fun2(b){
//     return function fun3(c) {
//       console.log(a+b+c)
//     }
//   }
// }

// fun1(1)(2)(3)

//without curry

// function calDis(price, dis) {
//   return price*dis
// }

// console.log(calDis(1000, .1))
// console.log(calDis(1000, .2))
// console.log(calDis(1000, .3))
// console.log(calDis(1000, .4))
// console.log(calDis(1000, .5))


// with curry

// function calPrice(price) {
//   return function calDis(dis){
//     return price*dis
//   }
// }

// var calDis = calPrice(1000)
// console.log(calDis(.1))
// console.log(calDis(.2))
// console.log(calDis(.3))
// console.log(calDis(.4))
// console.log(calDis(.5))







