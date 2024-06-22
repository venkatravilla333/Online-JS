

//local storage


//how to store to local storage

var btnOne = document.getElementById('one')


var btnOneFun = () => {
  window.localStorage.setItem('name', 'kohli')
  window.localStorage.setItem('age', 30)
}

btnOne.addEventListener('click', btnOneFun)


//how to access from local storage

var btnTwo = document.getElementById('two')

var btnTwoFun = () => {
  console.log(window.localStorage.getItem('name'))
  console.log(window.localStorage.getItem('age'))
}

btnTwo.addEventListener('click', btnTwoFun)


//how to delete from local storage

var btnThree = document.getElementById('three')

var btnThreeFun = () => {
  // localStorage.removeItem('name')
  // localStorage.removeItem('age')
  localStorage.clear()
}

btnThree.addEventListener('click', btnThreeFun)

//session storage
var btnFour = document.getElementById('four')

var btnFourFun = () => {
  sessionStorage.setItem('name', 'sachin')
  sessionStorage.setItem('age', 40)
}

btnFour.addEventListener('click', btnFourFun)

//how to get values from session storage

var btnFive = document.getElementById('five')

var btnFiveFun = () => {
  console.log(sessionStorage.getItem('name'))
  console.log(sessionStorage.getItem('age'))
}

btnFive.addEventListener('click', btnFiveFun)

//how to delete values from session storage

var btnSix = document.getElementById('six')

var btnSixFun = () => {
  // sessionStorage.removeItem('name')
  // sessionStorage.removeItem('age')
  sessionStorage.clear()
}


btnSix.addEventListener('click', btnSixFun)
