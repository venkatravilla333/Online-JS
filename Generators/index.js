
// function regularFun() {
//   var x = 100
//   return x
//   var y = 200
//   return y
// }

// console.log(regularFun())


function* genFun() {
  
  try {
    yield 100 //pause and return some value
    
  } finally {
    yield 200 //pause and return some value
  }
  
}
var genObj = genFun()
console.log(genObj.next())
console.log(genObj.return())
console.log(genObj.next())
