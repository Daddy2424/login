const regEmailInput = document.getElementById('regemailInput');
const regPassInput = document.getElementById('regpassInput');
const logEmailInput = document.getElementById('logemailInput');
const logPassInput = document.getElementById('logpassInput');
const regsubmitBtn = document.getElementById('regsubmitBtn');
const logsubmitBtn = document.getElementById('logsubmitBtn');
const regGreetings = document.getElementById('afterreg')
const registerFullForm = document.getElementById('registerfullform')
const loginFullForm = document.getElementById('login')
const regloginbtn = document.getElementById('regloginbtn')
const loginLink = document.getElementById('loginlink')
const regLink = document.getElementById('reglink')
const confirmPass = document.getElementById('confirmpassword')
const logCloseEye = document.getElementById('closedeye')
const logOpenEye = document.getElementById('openeye')
const regCloseEye = document.getElementById('regclosedeye')
const regOpenEyes = document.getElementById('regopeneye')
const confirmCloseEyes = document.getElementById('confirmclosedeye')
const confirmOpenEye = document.getElementById('confirmopeneye')

// both register and login functions that are used when clicking register and login button
function register(){
  event.preventDefault();
  let regEmailValue = regEmailInput.value.trim()
  let regPassValue = regPassInput.value.trim()
  let regConfirmPass = confirmPass.value.trim()

  if (regEmailValue === '' || regPassValue === '') {
    alert("Both username and password are required.");
    return; 
  }else if(regPassValue != regConfirmPass){
    alert('Password not same')
  }else{
    let userInfo = {
      username: regEmailValue,
      password: regPassValue,
    }
    localStorage.setItem(regEmailValue ,JSON.stringify(userInfo));
    console.log(userInfo)
    registerFullForm.style.display = 'none'
    regGreetings.style.display = 'flex'
  
    regEmailInput.value = '';
    regPassInput.value = '';
    regConfirmPass.value = '';
  }


}

function login(){
  event.preventDefault()
  let logEmailValue = logEmailInput.value.trim()
  let logPassValue = logPassInput.value.trim()
  const user = JSON.parse(localStorage.getItem(logEmailValue));
  console.log(user)
  if(user && user.password === ''){
    alert('Error')
  }else if(user && user.password === logPassValue){
    window.location.href = 'rajagiri.html';
    console.log('ok')
  }else if(user && user.password != logPassValue){
    alert('Incorrect username or password')
  }
  
  logEmailInput.value = '';
  logPassInput.value = '';
}

// when registration is successfull and afterwards clicking login button
function afterRegisterLoginbtn(){
  loginFullForm.style.display = 'flex'
  regGreetings.style.display = 'none'
}

// functions for displaying login and registration forms when clicking bottom link
function loginLinkDisplay(){
  event.preventDefault();
  loginFullForm.style.display = 'flex'
  regGreetings.style.display = 'none'
  registerFullForm.style.display = 'none'
}
function reginLinkDisplay(){
  event.preventDefault();
  loginFullForm.style.display = 'none'
  regGreetings.style.display = 'none'
  registerFullForm.style.display = 'flex'
}

//showing password functions
function logOpenEyeOnClick(){
  logCloseEye.style.display = 'none'
  logOpenEye.style.display = 'block'
  logPassInput.type = 'name'
}
function logCloseEyeOnClick(){
  logCloseEye.style.display = 'block'
  logOpenEye.style.display = 'none'
  logPassInput.type = 'password'
}
function regOpenEyesOnClick(){
  regCloseEye.style.display = 'none'
  regOpenEyes.style.display = 'block'
  regPassInput.type = 'name'
}
function regCloseEyesOnClick(){
  regCloseEye.style.display = 'block'
  regOpenEyes.style.display = 'none'
  regPassInput.type = 'password'
}
function confirmOpenEyesOnClick(){
  confirmCloseEyes.style.display = 'none'
  confirmOpenEye.style.display = 'block'
  confirmPass.type = 'name'
}
function confirmCloseEyesOnClick(){
  confirmCloseEyes.style.display = 'block'
  confirmOpenEye.style.display = 'none'
  confirmPass.type = 'password'
}

// all event listeners
regsubmitBtn.addEventListener('click', register)
logsubmitBtn.addEventListener('click', login)
regloginbtn.addEventListener('click', afterRegisterLoginbtn)
loginLink.addEventListener('click', loginLinkDisplay)
regLink.addEventListener('click',reginLinkDisplay)
logCloseEye.addEventListener('click', logOpenEyeOnClick)
logOpenEye.addEventListener('click', logCloseEyeOnClick)
regCloseEye.addEventListener('click', regOpenEyesOnClick)
regOpenEyes.addEventListener('click', regCloseEyesOnClick)
confirmCloseEyes.addEventListener('click', confirmOpenEyesOnClick)
confirmOpenEye.addEventListener('click', confirmCloseEyesOnClick)