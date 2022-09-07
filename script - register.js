const name = document.getElementById('username')
const password = document.getElementById('password')
const confirmpassword = document.getElementById('confirmpassword')
const email = document.getElementById('email')
const checkbox = document.getElementById('checkbox')

const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push(' Name is required ')
  }

  if (email.value === '' || email.value == null) {
    messages.push(' Email is required ')
  }

  if (checkbox.checkbox == false) {
    messages.push(' You must agree with the terms and conditions ')
  }

  if (password.value.length <= 6) {
    messages.push(' Password must be longer than 6 characters ')
  }

  if (confirmpassword.value !== password.value) {
    messages.push(' Confirm password must be exactly the same as password ')
  }

  if (password.value.length >= 20) {
    messages.push(' Password must be less than 20 characters ')
  }

  if (password.value === 'password') {
    messages.push(' Password cannot be password ')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
  
  else if(messages.length == 0)
  {
    window.alert("Successully submitted!")
  }
})
