

var obj = {
  name: 'sachin',
  age: 40,
  address: 'mumbai'
}

// without destructure

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.address)

// with destructure

// var {name, age, address} = obj

// console.log(name)
// console.log(age)
// console.log(address)

// var obj = {
//   name: 'kohli',
//   age: 30,
//   income: [{cash: 100000}, {cars:['baleno', 'audi']}]
// }
// without
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.income[1].cars[1])

// with destructure
// var { name, age, income } = obj

// var [obj1, obj2] = income
// var { cash } = obj1
// var { cars } = obj2
// var [c1, c2] = cars

// var {name, age, income:[{cash}, {cars:[c1, c2]}]} = obj

// console.log(name)
// console.log(age)
// console.log(c2)




