
var name1 = document.getElementById('name')
var email = document.getElementById('email')
var password = document.getElementById('password')
var form = document.getElementById('form')

var name_error = document.getElementById('name_error')
var email_error = document.getElementById('email_error')
var password_error = document.getElementById('password_error')



form.addEventListener('submit', (e) => {
  
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  
  e.preventDefault()
  if (name1.value ==='' || name1.value.trim() === '') {
    name_error.innerHTML = 'Name is required'
  }else {
    name_error.innerHTML = '';
  }

  if (!email.value.match(emailPattern)) {
    email_error.innerHTML = 'Enter valid email'
  } else {
     email_error.innerHTML = '';
  }

  if (password.value.length <= 5) {
    password_error.innerHTML = 'Password must be more than 5 letters'
  } else if (password.value.length > 6 && password.value.length < 15) {
    password_error.innerHTML = '';
  } else {
     password_error.innerHTML = 'Password must be less than 15 letters';
  }
  
  // after validation

  var obj = {
    name: name1.value,
    email: email.value,
    password: password.value,
  };
  sendData(obj)
  console.log(obj);
  
})

function sendData(data) {
  fetch('api', {
    method: 'POST',
    headers: {
      'Content-Type': 'json'
    },
    body: JSON.stringify(data)

  })
    .then(()=>{})
    .catch(()=>{})
    
}
