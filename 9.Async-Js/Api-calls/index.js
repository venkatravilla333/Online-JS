
//get all data
var btnOne = document.getElementById('one')


var btnOneFun = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      console.log(res)
     return res.json()
    }).then((data) => {
    console.log(data)
  })
  
}

btnOne.addEventListener('click', btnOneFun)

//get single data

var btnTwo = document.getElementById('two')

var btnTwoFun = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/100')
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}

btnTwo.addEventListener('click', btnTwoFun)

//send data

var btnThree = document.getElementById('three')

var newObj = {
  userId: '200',
  title: 'my title',
  body: 'my body'
}

var btnThreeFun = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify(newObj)
  })
  .then((res) => {
    console.log(res)
  })
}

//update data

var btnFour = document.getElementById('four')
console.log(btnFour)

var btnFourFun = () => {
  console.log('four')
  fetch('https://jsonplaceholder.typicode.com/posts/100', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify(newObj)
  })
    .then((res) => {
      console.log(res)
    })
}

btnFour.addEventListener('click', btnFourFun)

//delete data

var btnFive= document.getElementById('five')

var btnFiveFun = () => {
  console.log('five')
  fetch('https://jsonplaceholder.typicode.com/posts/100', {
    method: 'DELETE',
    
  })
    .then((res) => {
      console.log(res)
    })
}

btnFive.addEventListener('click', btnFiveFun)